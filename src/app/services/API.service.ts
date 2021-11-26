import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MicrosoftService } from './microsoft-script.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient, private _microsoftService:MicrosoftService) { }
  private groupId:string='1776b347-8414-4916-9eb1-9346cdc6346e';
  sincronizar(){
    const params = new HttpParams();
    this._httpClient.post('http://localhost:9090/api/sync?groupId=1776b347-8414-4916-9eb1-9346cdc6346e&token=eyJ0eXAiOiJKV1QiLCJub25jZSI6IjlfbUJEV0o2aVgxTEJYMXQ5eDBOZkFfOVNvTnVqZWIxTWJ5NmRwSGlVU0kiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81ZWNiZjE2My04NDkxLTRlNzQtOGU3MS1jNjIzMDI3OWU4ODYvIiwiaWF0IjoxNjM3ODI4OTk5LCJuYmYiOjE2Mzc4Mjg5OTksImV4cCI6MTYzNzgzNDY2NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZUENVVWJqejhuSy9aUFVSZ3owYjVHNjkwQS9yQ3RRNE0ya0YzNUtLVytHWldmWUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkdyYXNzIiwiZ2l2ZW5fbmFtZSI6IkJlYXRyaXoiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxOTAuNzEuNjQuOTgiLCJuYW1lIjoiQmVhdHJpeiBHcmFzcyIsIm9pZCI6ImE3NGRmOGZhLTI4MWYtNGNiYi1hNTBhLWM5NzQ0ZTQ5YWU3ZCIsInBsYXRmIjoiNSIsInB1aWQiOiIxMDAzMjAwMDNFRTlGQTdCIiwicmgiOiIwLkFTWUFZX0hMWHBHRWRFNk9jY1lqQW5ub2hyWElpOTc1MmJGSXFLMjNTTnB5VUdRbUFIcy4iLCJzY3AiOiJEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRNYW5hZ2VkRGV2aWNlcy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRTZXJ2aWNlQ29uZmlnLlJlYWQuQWxsIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBHcm91cC5SZWFkLkFsbCBvcGVuaWQgcHJvZmlsZSBUYXNrcy5SZWFkIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRCYXNpYy5BbGwgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJKbEN1MWtQeFZNZ2NaSS1ZQkloQ0E1bkdKTFc5MzlEeU0yNnVwbjgwMTRvIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IlNBIiwidGlkIjoiNWVjYmYxNjMtODQ5MS00ZTc0LThlNzEtYzYyMzAyNzllODg2IiwidW5pcXVlX25hbWUiOiJ2ZW50YXNAZGJhZXhwZXJ0cy50ZWNoIiwidXBuIjoidmVudGFzQGRiYWV4cGVydHMudGVjaCIsInV0aSI6InFKc21jelNZQ1UyVy15ZGoxTWZEQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiRVdWU3VxNENJbkZrN2N6TV9fMHNnY0QwUmxUZWN2cjdTMmhBWGpEemZQcyJ9LCJ4bXNfdGNkdCI6MTU1MTczNjk4Mn0.Y9gJ4Hx-VtLzaxz53popwnS1tbFq9cERmxTHi9wqZrAHhEXAWuVZe-X7-Baao6TEKrRZZBpwlKVRsUtVIguBoxLeYOsTZCLQgdjFHq6YO9CIa9h5svoU-I2oH-HRsWgLGIvtP0pLs9IfE9Vi0WmbCHMYbb0HCBMomkcXtYAJVP70s44A3xsUIjmZI71g1U8MP4cFKnn5x91IWV0IcS1WhUaQJNYP878XY33zDkrHs5u5DEdsBL0itf6_aMV-mBtjIm6_zsXfD7IGjM39IwdNi_dPrEhy35DHpAnsEbYjn15_GrGAMrymSEFbQCb_7EU_HSfw-sKU8WGYEoGiE1wq2A',{params}).subscribe((resp:any)=>{
        console.log(this._microsoftService.token.toString());
    });
  }

}