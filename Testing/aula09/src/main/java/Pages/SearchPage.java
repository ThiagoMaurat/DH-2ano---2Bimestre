package Pages;

import Base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class SearchPage extends BasePage {

    protected static final String inputSearch = "//*[@id=\"buscador\"]/div/div[1]/div/div[1]/div[2]";
    protected static final String btnBuscar = "//*[@id=\"btn-buscador\"]";

    public void buscarCidade(String cidade) throws InterruptedException {
        WebElement searchBox = getWebElement(By.xpath(inputSearch));
        searchBox.clear();
        searchBox.sendKeys(cidade);
        Thread.sleep(2000);
        searchBox.sendKeys(Keys.ENTER);
    }

    public void fazerBusca() {
        WebElement pesquisa = getWebElement(By.xpath(btnBuscar));
        pesquisa.click();
    }
}
