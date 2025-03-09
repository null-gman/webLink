# welcom to weblink! 2.5.0

this script take from user a 'file name' , 'website url'  and 'dir' to **craete** and html file that redirect to that website from default browser that user uses .

## Usage

* type ".exit" to exit the program .
* you must a valid 'file name' , chars that are not allowed :


| char             |   replacd by   |
| ---------------- | :-------------: |
| ' " ' AND " ' " |      NULL      |
| white space " "  | underscore "_" |



* you are resposable for the url the program cuurntrly not donig any cheack or format to url .


### to use this script on linux or windows :
1. in */main.js** got to these 2 lines :
```
    DataObj.dir_name = DataObj.dir + "/" + DataObj.fileName; /*for linux */
    DataObj.dir_name = DataObj.dir + "\\" + DataObj.fileName; /*for windows */
```
2. Comment out the unused platform based on the system you're working on.

3. by defualt it will be linux based :
```
    DataObj.dir_name = DataObj.dir + "/" + DataObj.fileName; /*for linux */
    //DataObj.dir_name = DataObj.dir + "\\" + DataObj.fileName; /*for windows */
```
> ©null-gman 2025
