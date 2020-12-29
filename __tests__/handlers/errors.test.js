const handlers = require('../../handlers/errors');

describe('Error 404 wyświetla się prawidłowo', () => {
    let req = {};
    let res = {
        status: jest.fn(),
        json: jest.fn()
    };
    handlers.err_404(req, res);
    test('Status to 404', () => {
        expect(res.status.mock.calls[0][0]).toBe(404);
    });
    test('Error = true', () => {
        expect(res.json.mock.calls[0][0].error).toBe(true);
    });
    test('Wiadomość brzmi prawidłowo', () => {
        expect(res.json.mock.calls[0][0].message).toBe("Can't find resource");
    });
});

describe('Error 500 wyświetla się prawidłowo', () => {
    let req = {};
    let res = {
        status: jest.fn(),
        json: jest.fn()
    };
    let err = {
        message: 'Testowy błąd'
    };
    let next = jest.fn();
    handlers.err_500(err,req,res,next);
    test('Status to 500', () => {
        expect(res.status.mock.calls[0][0]).toBe(500);
    });
    test('Error = true', () => {
        expect(res.json.mock.calls[0][0].error).toBe(true);
    });
    test('Wiadomość brzmi prawidłowo', () => {
        expect(res.json.mock.calls[0][0].message).toBe("Błąd serwera");
    });
});