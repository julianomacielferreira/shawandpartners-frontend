/*
 * The MIT License
 *
 * Copyright 2019 Juliano Maciel Ferreira.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpointAPIURL = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  public listUsers(since: number): Observable<User[]> {

    const githubUsersUrl = `${this.endpointAPIURL}?since=${since}&per_page=5`;

    return this.http.get<User[]>(githubUsersUrl);
  }

  public getUser(login: string): Observable<User> {

    const githubUserUrl = `${this.endpointAPIURL}/${login}/details`;

    return this.http.get<User>(githubUserUrl);
  }

  public listUserRepositories(login: string): Observable<Repository[]> {

    const githubUserReposUrl = `${this.endpointAPIURL}/${login}/repos`;

    return this.http.get<Repository[]>(githubUserReposUrl);
  }
}
