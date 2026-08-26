// ==========================================================================
// CONTROLADOR COMPLETO MODO CLARO / ESCURO (PERSISTENTE)
// ==========================================================================

const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica se o usuário possui configuração prévia em seu navegador
const currentSavedTheme = localStorage.getItem('site-theme');

// Aplica o tema configurado logo no início
if (currentSavedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.removeAttribute('data-theme');
}

// Manipulador do clique no avatar do topo para alternar os modos
themeToggleBtn.addEventListener('click', () => {
    const isDarkModeActive = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (!isDarkModeActive) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('site-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('site-theme', 'light');
    }
});
