const xhr = new XMLHttpRequest();

var onPageOpen;

xhr.onreadystatechange = function()
{
    if(xhr.readyState === 4 && xhr.status === 200)
    {
        const content = xhr.responseText;
        onPageOpen(content);
    }
};

function getFile(url, onOpen)
{
    xhr.open('GET', url);
    onPageOpen = onOpen;

    xhr.send();
}