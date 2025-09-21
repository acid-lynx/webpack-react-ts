import logo from './assets/react-png.svg';
import './style.css'

export const App = () => {
    return (
        <div>
            <img src={logo} alt="img" width={300} height={300} />
            <h2>HELLO WORLD!</h2>
        </div>
    )
}