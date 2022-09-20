import { Main } from './index';
import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';

describe('expectedData', () => {
    it('checks if returned data from API rendered into component', async () => {
        
        nock('https://api.fake-rest.refine.dev')
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
            })
            .get('/users/1')
            .reply(200, {
                id: 1,
                firstName: "/value from the api",
            });
            
        render(<Main />);

        await waitFor(() => {
            expect(screen.getByText("/value from the api")).toBeInTheDocument();
        });
    });
});