function Party(){
    function change(){
        const colors=["red","blue","green","black","white","pink"]
        const color = Math.floor(Math.random()*6)+1;
        document.body.style.background=colors[color];
    }
    return (<>
    <button onClick={change}>Party</button>
    </>)
}
export default Party