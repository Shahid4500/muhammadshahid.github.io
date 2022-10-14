
let toggleBtn= document.getElementById('toggle');
let navigation= document.getElementById('navigation');

toggleBtn.addEventListener('click', ()=>
{
    if(navigation.style.display==='none')
    {
        navigation.style.display='block';
        navigation.style.transition='all 3s ease-in';
    }
    else
    {
        navigation.style.display='none';
        ham1.style.transform='rotate(0deg)';
        ham2.style.transform='rotate(0deg)';
    }
})
