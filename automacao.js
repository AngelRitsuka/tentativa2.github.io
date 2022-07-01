//automação com selenium e nodejs

const{Builder, By, Key}=require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run() 
{
    let driver = await new Builder().forBrowser('chrome').build();
    //link do site que eu quero acessar
    await driver.get('https://angelritsuka.github.io/cadastro-de-volunt-rios-em-php.github.io/');

    //clicando no nome completo
    const searchBar1 = await driver.findElement(By.xpath('/html/body/form/input[1]'));
    await searchBar1.sendKeys('Angelica testando o nome completo');
    await searchBar1.sendKeys(Key.TAB);

    //depois de apertar tab para ir para a proxima caixa, irei digitar o email
    const searchBar2= await driver.findElement(By.xpath('/html/body/form/input[2]'));
    await searchBar2.sendKeys('teste@teste.com');
    await searchBar2.sendKeys(Key.TAB);

    //depois de dar outro tab, inseriremos o numero de telefone
    const searchBar3= await driver.findElement(By.xpath('/html/body/form/input[3]'));
    await searchBar3.sendKeys('11943819014');
    await searchBar3.sendKeys(Key.TAB);

    //selecionar a idade e responder se sim apertando espaço para seleciionar
    const searchBar4= await driver.findElement(By.xpath('//*[@id="Idade"]'));
    await searchBar4.sendKeys(Key.SPACE);
    await searchBar4.sendKeys(Key.TAB);

    //selecionar o genero
    const searchBar5= await driver.findElement(By.xpath('//*[@id="Genero"]'));
    await searchBar5.sendKeys(Key.SPACE);
    await searchBar5.sendKeys(Key.ENTER);
    await searchBar5.sendKeys(Key.TAB);

    //selecionar a frequencia e a frequencia ser atividade rotineira
    const searchBar6= await driver.findElement(By.xpath('//*[@id="Atividade"]'));
    await searchBar6.sendKeys(Key.SPACE);
    await searchBar6.sendKeys(Key.ARROW_DOWN);
    await searchBar6.sendKeys(Key.ENTER);
    await searchBar6.sendKeys(Key.TAB);

    //dias para participar, domingo foi o selecionado
    const searchBar7= await driver.findElement(By.xpath('/  //*[@id="primeirodia"]'));
    await searchBar7.sendKeys(Key.SPACE);
    await searchBar7.sendKeys(Key.TAB);

    //periodo, tarde (selecionar com espaço, ir para a linha de baixo com a seta para baixo e confirmar com enter. Por fim ir para a proxima questao com tab )
    const searchBar8= await driver.findElement(By.xpath('//*[@id="Horario"]'));
    await searchBar8.sendKeys(Key.SPACE);
    await searchBar8.sendKeys(Key.ARROW_DOWN);
    await searchBar8.sendKeys(Key.ENTER);
    await searchBar8.sendKeys(Key.TAB);

    //selecionar ongs, apertar 3 vezes para baixo, selecionar com space e tab para a proxima question.
    const searchBar9= await driver.findElement(By.xpath('//*[@id="pets"]'));
    await searchBar9.sendKeys(Key.ARROW_DOWN);
    await searchBar9.sendKeys(Key.ARROW_DOWN);
    await searchBar9.sendKeys(Key.ARROW_DOWN);
    await searchBar9.sendKeys(Key.SPACE);
    await searchBar9.sendKeys(Key.TAB);

    //entrar em contato, o escolhido para o teste foi whatsapp
    const searchBar10= await driver.findElement(By.xpath('//*[@id="wpp"]'));
    await searchBar10.sendKeys(Key.ARROW_DOWN);
    await searchBar10.sendKeys(Key.SPACE);
    await searchBar10.sendKeys(Key.TAB);
    //enviar o formulario ao clicar em enter
    await searchBar10.sendKeys(Key.ENTER);

}