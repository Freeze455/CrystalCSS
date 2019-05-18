const data_src_element = <HTMLScriptElement[]><any>document.querySelectorAll("div[data-src]");

for (let i: number = 0; i < data_src_element.length; i++)
{
    let url = data_src_element[i].getAttribute('data-src');
    data_src_element[i].style.backgroundImage = `url('${url}')`;
}