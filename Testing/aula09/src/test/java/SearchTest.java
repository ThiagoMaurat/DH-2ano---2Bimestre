import Pages.LoginPage;
import Pages.SearchPage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SearchTest {
    private static SearchPage page;

    @BeforeEach
    public void setUp() {
        page = new SearchPage();
        page.openApp();
    }

    @Test
    public void searchTest() throws InterruptedException {
        page.buscarCidade("Carilo");
        Thread.sleep(1000);
        page.realizarBusca();
        Thread.sleep(1000);
        String
    }
}
