package Pages;

import Base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LoginPage extends BasePage {

    protected static final String inputLoginXpath = "//*[@id=\"email\"]";
    protected static final String inputLoginId = "email";
    protected static final String inputLoginCssSelector = "#email";

    protected static final String inputPasswordXpath = "//*[@id=\"password\"]";
    protected static final String inputPasswordId = "password";
    protected static final String inputPasswordCssSelector = "#password";
    protected static final String btnLoginXpath = "/html/body/div/main/div/form/button";
    protected static final String btnLoginCssSelector = "#root > main > div > form > button";

    protected static final String usuarioLogadoXpath = "//*[@id=\"root\"]/header/nav/div/div/div/p[2]";
    protected static final String usuarioLogadoCssSelector = "#root > header > nav > div > div > div > p.txt-nombre";

    protected static final String btnIniciarXpath = "//*[@id=\"root\"]/header/nav/a[2]";
    protected static final String btnIniciarCssSelector = "#root > header > nav > a:nth-child(2)";

    protected static final String mensagemCredenciaisInvalidas = "//*[@id=\"root\"]/main/div/form/p[1]";

    public void inserirDadosLogin(String email, String senha) {
        //WebElement campoLogin = getWebElement(By.xpath(inputLoginXpath));
        //WebElement campoLogin = getWebElement(By.id(inputLoginId));
        WebElement campoLogin = getWebElement(By.cssSelector(inputLoginCssSelector));
        campoLogin.clear();
        campoLogin.sendKeys(email);

        //WebElement campoSenha = getWebElement(By.xpath(inputPasswordXpath));
        //WebElement campoSenha = getWebElement(By.id(inputPasswordId));
        WebElement campoSenha = getWebElement(By.cssSelector(inputPasswordCssSelector));
        campoSenha.clear();
        campoSenha.sendKeys(senha);
    }

    public void fazerLogin() {
        //WebElement entrar = getWebElement(By.xpath(btnLoginXpath));
        WebElement entrar = getWebElement(By.cssSelector(btnLoginCssSelector));
        entrar.click();
    }

    public String getUsuarioLogado() {
        //WebElement identificacao = getWebElement(By.xpath(usuarioLogadoXpath));
        WebElement identificacao = getWebElement(By.cssSelector(usuarioLogadoCssSelector));
        return identificacao.getText();
    }

    public void iniciarSessao() {
        WebElement logar = getWebElement(By.cssSelector(btnIniciarCssSelector));
        logar.click();
    }

    public String getMensagemCredenciaisInvalidas() {
        WebElement credenciaisInvalidas = getWebElement(By.xpath(mensagemCredenciaisInvalidas));
        return credenciaisInvalidas.getText();
    }
}
