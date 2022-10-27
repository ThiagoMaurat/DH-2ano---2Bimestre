import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Driver {
    public static void main (String[] args) throws Exception {
        ChromeDriver driver = new ChromeDriver();

        driver.get("https://shopee.com.br/");

        Thread.sleep(5000);

        WebElement closeModal = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/div/div/shopee-banner-popup-stateful//div/div/div/div/div"));
        closeModal.click();

        WebElement searchBox = driver.findElement(By.xpath("//*[@id=\"main\"]/div/header/div[2]/div/div[1]/div[1]/div/form"));
        searchBox.sendKeys("PS5");

        searchBox.submit();

        WebElement selectPS5 = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/div/div/div[2]/div[2]/div[2]/div[6]/a/div/div"));
        selectPS5.click();

        WebElement addToCart = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div[5]/div/div/button[1]"));
        addToCart.click();

    }
}

