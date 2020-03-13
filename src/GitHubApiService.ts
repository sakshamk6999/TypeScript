import * as request from 'request';

export class GitHubApiService{
    getUserInfo(userName: string){
        let options: any = {
            headers: {
                'User-Agent': 'request'
            }
        }
        request.get('https://api.github.com/users/' + userName, options, (error: any, response: any, body: any) => {
            console.log(body);
        });
    }
}