export const LocaleState = (name,item)=>{
    localStorage.setItem(String(name),item)
}


export  const handleClearLocalStorage = () => {
    localStorage.clear(); // Effacer toutes les données du localStorage
    console.log('LocalStorage effacé');
};