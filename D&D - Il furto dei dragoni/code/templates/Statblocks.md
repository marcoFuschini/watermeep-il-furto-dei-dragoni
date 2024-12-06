---
razza: ""
classe: ""
for: "10"
des: "10"
cos: "10"
int: "10"
sag: "10"
car: "10"
---
> [!statblocks|columns]
>
> ![Char Image|cover right circle htiny wtiny lp]()
> 
> # `= this.file.name`
> > Descrizione
> *`= this.razza`*
> *Basics*
> 
> ---
| PV | CA | Iniziativa |
|:---:|:---:|:---:|
| 10 | 10 | 0 |
>
| FOR | DES | COS | INT | SAG | CAR |  |
|:---:|:---:|:---:|:---:|:---:|:---:|:--- |
| `= this.for` | `= this.des` | `= this.cos` | `= this.int` | `= this.sag` | `= this.car` |  |
| `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().for);` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().des);` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().cos);` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().int);` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().sag);` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().car);` | **Mod** |
| 0 | 0 | 0 | 0 | 0 | 0 | **TS** |
> 
|  |  |
| ---:|:--- |
| **Vel** | 9m (6 cas) |
| **Percezione passiva (SAG)** | 0 |
| **Bonus competenza** | 2 |
| **Scurovisione** | Sì/No  |
>
> ---
>> [!checks|no-t] 
>> - **Death Saves**
>>	- ❌
>>	- [ ] 
>>	- [ ] 
>>	- [ ] 
>>	- ✔
>>	- [ ] 
>>	- [ ] 
>>	- [ ] 
>
> ###### Traits
| | |
| --- | --- |
| **Classe** | `= this.classe` |
| **.** | |
| **Tratti raziali** | |
| **Talenti** | |

asd asd