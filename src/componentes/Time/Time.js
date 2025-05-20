import Colaborador from '../Colaborador'
import './Time.css'

export const Time = ( props ) => {
    const css = { backgroundColor: props.corSecundaria}
    const imagemPadrao = 'https://preview.redd.it/tralalelo-tralala-v0-vjx3o7g6dzue1.jpeg?width=299&format=pjpg&auto=webp&s=73b3eb6cb93b94639fc75233dc3a308487f78f8e'
    return (
        (props.colaboradores.length > 0) && <section className='time' style={ css }> 
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} corDeFundo={props.corPrimaria} cargo={colaborador.cargo} imagem={colaborador.imagem !== '' ? colaborador.imagem : imagemPadrao} /> )}
            </div>
        </section>
        
    )
} 