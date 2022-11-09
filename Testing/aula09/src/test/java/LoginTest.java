import Pages.LoginPage;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoginTest {
    private static LoginPage page;

    @BeforeEach
    public void setUp() {
        page = new LoginPage();
        page.openApp();
    }

    @Test
    public void loginFlowTest() throws InterruptedException {
        page.iniciarSessao();
        page.inserirDadosLogin("tgomes@digitalhouse.com", "turma01");
        Thread.sleep(2000);
        page.fazerLogin();
        Thread.sleep(2000);
        String usuario = page.getUsuarioLogado();
        assertTrue(usuario.contains("Tiago Gomes"));
        System.out.println("Usuário logado: " + usuario);
    }

    @Test
    public void loginFlowNegativeTest() throws InterruptedException {
        page.iniciarSessao();
        page.inserirDadosLogin("wirleyalmeida@digitalhouse.com", "turma01");
        Thread.sleep(2000);
        page.fazerLogin();
        Thread.sleep(2000);
        String mensagem = page.getMensagemCredenciaisInvalidas();
        assertTrue(mensagem.contains("Sus credenciales son inválidas. Por favor, vuelva a intentarlo"));
        System.out.println("Mensagem de credenciais inválidas: " + mensagem);
    }

    @AfterEach
    public void tearDown() {
        page.quitDriver();
    }
}
