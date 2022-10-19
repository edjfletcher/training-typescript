import {describe} from "node:test";
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as request from "superagent";
import {SuperAgentRequest} from "superagent";

chai.use(chaiHttp);
const server = chai.request('http://localhost:8080');

const getByPath = (path: string): Promise<request.Response> => {
    return new Promise((resolve, reject) => {
        chai
            .request('http://localhost:8080')
            .get(path)
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}

describe('GET /getByName/Northanger Abbey', () => {
    it('should return status 200, json header, and a json body', async () => {
        const authorName = 'Northanger Abbey';
        const expectedStatus = 200;
        const expectedContentType = 'application/json; charset=utf-8';
        const expectedBody = '{"title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price":  18.2}';

        const response = await getByPath(`/getByName/${authorName}`);

        chai.expect(response).to.have.status(expectedStatus);
        chai.expect(response.get('Content-Type')).to.eq(expectedContentType);
        chai.expect(response.text).to.equal(expectedBody);
    });
});
