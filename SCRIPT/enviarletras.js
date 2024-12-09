class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.formRef.current);
        const data = {
            titulo: formData.get('Titulo'),
            album: formData.get('Album'),
            artista: formData.get('Artista'),
            letra: formData.get('Letra'),
        };

        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.push(data);
        localStorage.setItem('submissions', JSON.stringify(submissions));

        alert('Letra salva com sucesso!');
        this.formRef.current.reset();
    }

    render() {
        return React.createElement('form', { ref: this.formRef, onSubmit: this.handleSubmit },
                React.createElement('fieldset', null,
                    React.createElement('legend', null, 'Enviar Letra'),
                    React.createElement('label', { htmlFor: 'Titulo' }, 'Título da Música:'),
                    React.createElement('input', { type: 'text', name: 'Titulo', required: true }),
                    React.createElement('label', { htmlFor: 'Album' }, 'Nome do Álbum:'),
                    React.createElement('input', { type: 'text', name: 'Album', required: true }),
                    React.createElement('label', { htmlFor: 'Artista' }, 'Artista:'),
                    React.createElement('select', { name: 'Artista', required: true },
                        React.createElement('option', { disabled: true, selected: true, value: '' }, '-- selecionar opção --'),
                        ['Taylor Swift', 'Noah Kahan', 'Phoebe Bridgers', 'Adam Melchor', 'Gracie Abrams'].map(artista =>
                            React.createElement('option', { key: artista }, artista)
                        )
                    ),
                    React.createElement('div', { className: 'letra' },
                        React.createElement('label', { htmlFor: 'Letra' }, 'Letra da Música:'),
                        React.createElement('textarea', { name: 'Letra', cols: 100, rows: 12, maxLength: 2000, required: true })
                    ),
                    React.createElement('button', { type: 'submit' }, 'Guardar'),
                    React.createElement('button', { type: 'reset' }, 'Limpar')
                )
            );
    }
}
ReactDOM.render(React.createElement(Formulario), document.getElementById('Enviar'));