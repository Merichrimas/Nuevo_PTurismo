function validarUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('role', 'admin');
        window.location.href = 'index.html';
    } else if (username === 'usuario' && password === 'user123') {
        localStorage.setItem('role', 'user');
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas');
    }
    return false;
}

function verificarAcceso() {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
        const adminButtons = document.querySelectorAll('.admin');
        adminButtons.forEach(btn => btn.style.display = 'none');
    }
}

function agregarComentario() {
    const comentario = document.getElementById('nuevo-comentario').value;
    if (comentario.trim()) {
        const comentariosDiv = document.getElementById('comentarios');
        comentariosDiv.innerHTML += `<p><strong>Anónimo:</strong> ${comentario}</p>`;
        document.getElementById('nuevo-comentario').value = "";
        alert('Comentario añadido');
    }
}
