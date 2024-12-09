function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function loadPage(index){
    const contentDiv = document.getElementById("content");
    if(index==3){
        class MostrarLetras extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    submissions: []
                };
            }
        
            componentDidMount() {
                // Recupera as submissões do localStorage quando o componente é montado
                const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
                this.setState({ submissions });
            }
        
            handleDelete(index) {
                // Remove uma submissão do localStorage e atualiza o estado
                const updatedSubmissions = this.state.submissions.filter((_, i) => i !== index);
                this.setState({ submissions: updatedSubmissions });
                localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
            }
        
            toggleExpand(event, index) {
                const letraElement = document.querySelector(`.letra-${index}`);
                const icon = event.target.querySelector('i') || event.target;
                
                // Alterna a classe para expandir/colapsar a letra
                letraElement.classList.toggle('expanded');
            
                // Alterna o ícone entre "mais" e "menos"
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            }            
        
            render() {
                const { submissions } = this.state;
            
                return React.createElement('div', null,
                    React.createElement('h2', null, 'Submissões de Letras'),
                    submissions.length === 0
                        ? React.createElement('p', null, 'Nenhuma letra enviada ainda.')
                        : React.createElement('ul', { className: 'musicas-lista' },
                            submissions.map((submission, index) =>
                                React.createElement('li', { key: index, className: 'musica-env' },
                                    React.createElement('div', { className: 'musica-conteudo' }, // Nova div englobando info e botões
                                        React.createElement('div', { className: 'musica-info' },
                                            React.createElement('div', { className: 'musica-titulo-album' },
                                                React.createElement('strong', { className: 'musica-titulo' }, submission.titulo),
                                                ' - ',
                                                React.createElement('span', { className: 'musica-album' }, submission.album)
                                            ),
                                            React.createElement('p', { className: 'musica-artista' }, submission.artista)
                                        ),
                                        React.createElement('div', { className: 'musica-botoes' },
                                            React.createElement('button', {
                                                onClick: (e) => this.toggleExpand(e, index),
                                                className: 'expand-btn'
                                            }, React.createElement('i', { className: 'fa-solid fa-plus' })),
                                            React.createElement('button', {
                                                onClick: () => this.handleDelete(index),
                                                className: 'delete-btn'
                                            }, React.createElement('i', { className: 'fa-regular fa-trash-can' }))
                                        )
                                    ),
                                    React.createElement('pre', { className: `letra letra-${index}` }, submission.letra)
                                )
                            )
                        )
                );
            }
            
            
            
        }
        
        ReactDOM.render(React.createElement(MostrarLetras), document.getElementById('content'));
    }
}
if (idextra !== null) {
    loadPage(parseInt(idextra, 10)); // Converte para número
}
