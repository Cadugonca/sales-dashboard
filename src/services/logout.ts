import Cookies from 'js-cookie'

export function logout() {
  if (confirm('Você tem certeza que deseja sair?') === true) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
