import { MdMessage } from 'react-icons/md';
import styles from './Button.module.css';

const Button = (props) => {
  // Extract the props you need
  const { isOutline, icon, text, onClick } = props;

  // Return the button element with the onClick handler
  return (
    <button 
      className={isOutline ? styles.outline_btn : styles.primary_btn}
      onClick={onClick} // Add the onClick handler here
    >
      {icon}
      {text}
    </button>
  )
}
// const Button = (props) => {
//   //console.log(props) -> We can see both the properties of this button
//   //We can also use destructuring, 
//   //const { isOutline, icon, text } = props;
//   return (
//     <button 
//     className={props.isOutline ? styles.outline_btn :styles.primary_btn}>
//       {props.onClick}
//       {props.icon}
//       {props.text}
//     </button>
//   )
// }

export default Button