const http = require('http');
const os = require('os');

const PORT = 3333;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/os-user' && req.method === 'GET') {
        const username = os.userInfo().username;
        if (!username) {
            res.writeHead(500, {
                ...corsHeaders,
                'Content-Type': 'application/json',
            });
            res.write(
                JSON.stringify({
                    message: 'Internal server error',
                    success: false,
                })
            );
            res.end();
        }
        res.writeHead(200, {
            ...corsHeaders,
            'Content-Type': 'application/json',
        });
        res.write(JSON.stringify({ message: { username }, success: true }));
        res.end();
    } else {
        res.writeHead(404, {
            ...corsHeaders,
            'Content-Type': 'application/json',
        });
        res.end(JSON.stringify({ message: 'Route not found', success: false }));
    }
});

server.listen(PORT, () => {
    console.log(`Get OS user API started on port: ${PORT}`);
});
