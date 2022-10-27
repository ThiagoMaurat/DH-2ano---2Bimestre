import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Driver {
    public static void main (String[] args) throws Exception{
        ChromeDriver driver = new ChromeDriver();

        driver.get("https://www.mercadolivre.com.br");
        driver.manage().window().maximize();

        WebElement searchBox = driver.findElement(By.xpath("//*[@id=\"cb1-edit\"]"));
        searchBox.sendKeys("Iphone 13");

        searchBox.submit();

        Thread.sleep(1000);
        WebElement firstResult = driver.findElement(By.xpath("//*[@id=\"root-app\"]/div/div[2]/section/ol/li[1]/div/div/div[2]/div[1]/a/h2"));
        firstResult.click();

        WebElement capacity = driver.findElement(By.xpath("//*[@id=\"ui-pdp-main-container\"]/div[1]/div/div[1]/div[2]/div[3]/div[1]/div/a[1]"));
        capacity.click();

        WebElement color = driver.findElement(By.xpath("//*[@id=\"ui-pdp-main-container\"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/a[5]/div"));
        color.click();

        Thread.sleep(2000);

        WebElement addToCart = driver.findElement(By.className("andes-button andes-spinner__icon-base andes-button--quiet"));
        addToCart.click();

    }
}

