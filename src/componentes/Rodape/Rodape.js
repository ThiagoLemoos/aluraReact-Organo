import './Rodape.css'

export const Rodape = () => {
    return (
        <div className='rodapedapagina'>
            <div className='logos'> 
                <img src='/imagens/fb.png' alt='Facebook Logo' />
                <img src='/imagens/tw.png' alt='Twitter Logo'/>
                <img src='/imagens/ig.png' alt='Instagram Logo'/>
            </div>
            <div className='organo'> 
                <img src='/imagens/logo.png' alt='Organo Logo' />
            </div>
            <h5>Desenvolvido por Thiago Lemos.</h5>
        </div>
    )
}