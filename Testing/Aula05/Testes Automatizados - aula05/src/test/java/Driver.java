import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Driver {
    public static void main (String[] args) {
        ChromeDriver driver = new ChromeDriver();

        driver.get("https://www.mercadolivre.com.br");

        WebElement searchBox = driver.findElement(By.xpath("//*[@id=\"cb1-edit\"]"));
        searchBox.sendKeys("Iphone 13");

        searchBox.submit();

        WebElement firstResult = driver.findElement(By.xpath("//*[@id=\"root-app\"]/div/div[2]/section/ol/li[1]/div/div/div[2]/div[1]/a/h2"));
        firstResult.click();
    }
}

