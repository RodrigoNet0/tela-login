import './Tela.css'
//import  fundo from './assets/fundo.gif'

function Tela() {
    return (
        <div className='container'>
            <img src='https://media1.tenor.com/m/LdC3Dn5YXm4AAAAd/pokemon-detective-pikachu.gif' alt='fundo'/>
            <div className='usuario'>
                <label>
                <input type='text' placeholder='Usuario'/>
                </label>

            </div>
            <div className='senha'>
            <label>
                <input type='password' placeholder='Senha'/>
                </label>
            </div>
        </div>

    );
}

export default Tela