// https://vercel.com/docs/concepts/functions/edge-middleware


// testing. idk if it works
export function middleware(req) {
    return Response.redirect(new URL('/public', req.url));
}