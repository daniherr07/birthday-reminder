import { NextResponse } from 'next/server';


export function middleware(request) {
    // Verificar si la cookie "userData" existe
    const authCookie = request.cookies.get('auth');
    
    // Si la cookie no existe, redirige a la página de login
    if (!authCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

// Aplica el middleware solo a las rutas especificadas
export const config = {
    matcher: ['/dashboard', '/profile', '/settings'],
};