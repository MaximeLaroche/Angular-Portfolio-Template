import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const SERVER_URL =
  'https://raw.githubusercontent.com/MaximeLaroche/Recherche-Stage/BaseAnglais/';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}

  getProfile(): Promise<any> {
    return this.http.get(SERVER_URL + 'assets/profile.json').toPromise();
  }

  getTopSkills(): Promise<any> {
    return this.http.get(SERVER_URL + 'assets/top-skills.json').toPromise();
  }

  getFeaturedProjects(): Promise<any> {
    return this.http.get(SERVER_URL + 'assets/projects.json').toPromise();
  }

  getWorkHistory(): Promise<any> {
    return this.http
      .get(SERVER_URL + 'assets/work-experience.json')
      .toPromise();
  }

  getCV(): Promise<any> {
    let headers = new HttpHeaders();
    headers.append(
      'Access-Control-Allow-Headers',
      'Content-Type,application/json'
    );
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this.http
      .get(
        'https://github.com/MaximeLaroche/Recherche-Stage/blob/BaseAnglais/CV.pdf',
        { headers: headers }
      )
      .toPromise();
  }
}
