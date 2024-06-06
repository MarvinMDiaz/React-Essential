export default function TabButton({children, onSelect, isSelected,...props}){

    return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect} {...props}>{children}</button>
    </li>);
}

// export default function TabButton({children}){
//     return <li><button>{children}</button></li>;
// }
