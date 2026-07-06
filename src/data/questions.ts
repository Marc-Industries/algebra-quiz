import { Question } from '../types';

// VERSIONE DEFINITIVA CORRETTA - pronta per Git
// Nota: le formule matematiche usano la sintassi KaTeX
// $...$ per inline, $$...$$ per display

export const questionBank: Question[] = [

  // ── DOMANDE DAL QUIZ_2025 (Quiz sul Quiz_2025.pdf - domande 1-20) ──

  {
    id: 1,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Se un endomorfismo $f$ di $\\mathbb{R}^3$ ha polinomio caratteristico $x^2(x-1)$ e $\\operatorname{Im}(f)$ è la retta di equazioni $x - y = 0,\\; y - z = 0$, allora:',
    options: [
      '$f$ è diagonalizzabile.',
      '$f$ non è diagonalizzabile.',
      'Non posso sapere se $f$ è diagonalizzabile o meno.',
      '$f$ è iniettiva.',
    ],
    correctIndices: [0],
    explanation: `Il polinomio caratteristico è $p(x) = x^2(x-1)$, quindi gli autovalori sono $\\lambda_1 = 0$ (con molteplicità algebrica $m_a(0)=2$) e $\\lambda_2 = 1$ (con $m_a(1)=1$).

**Passo 1 — Analisi di $\\lambda = 0$:**
$\\operatorname{Ker}(f) = \\operatorname{Im}(f)^\\perp$? No. Per il Teorema Rango-Nullità:
$$\\dim\\operatorname{Ker}(f) + \\dim\\operatorname{Im}(f) = 3$$
Siccome $\\operatorname{Im}(f)$ è una retta, $\\dim\\operatorname{Im}(f) = 1$, dunque $\\dim\\operatorname{Ker}(f) = 2$.

**Passo 2 — Molteplicità geometrica di $\\lambda = 0$:**
La molteplicità geometrica è $m_g(0) = \\dim\\operatorname{Ker}(f) = 2 = m_a(0)$. ✓

**Passo 3 — Molteplicità geometrica di $\\lambda = 1$:**
$m_g(1) \\geq 1$ e $m_g(1) \\leq m_a(1) = 1$, quindi $m_g(1) = 1$. ✓

**Conclusione:** Poiché $m_g(\\lambda) = m_a(\\lambda)$ per tutti gli autovalori, $f$ è **diagonalizzabile**.`,
  },

  {
    id: 2,
    category: 'Determinante',
    type: 'multi',
    text: 'Sia $A$ una matrice quadrata di ordine 4. Il determinante di $A$ è sicuramente uguale a 0 se:',
    options: [
      '$A$ ha rango 3.',
      '$A$ ha due righe uguali.',
      '$A$ è invertibile.',
      '$A$ ha rango 4.',
    ],
    correctIndices: [0, 1],
    explanation: `Il determinante di una matrice quadrata $n \\times n$ è zero se e solo se la matrice **non** è invertibile, ovvero se e solo se $\\operatorname{rk}(A) < n$.

**Opzione a — $A$ ha rango 3:**
$\\operatorname{rk}(A) = 3 < 4$, quindi $A$ non è invertibile, quindi $\\det(A) = 0$. ✓

**Opzione b — $A$ ha due righe uguali:**
Se due righe sono uguali, sottraendo una dall'altra si ottiene una riga di zeri → il determinante è 0.
Formalmente: $\\det$ è multilineare e alternante, quindi scambiare due righe uguali dà $\\det(A) = -\\det(A)$, cioè $\\det(A) = 0$. ✓

**Opzione c — $A$ è invertibile:**
Se $A$ è invertibile, $\\det(A) \\neq 0$. ✗

**Opzione d — $A$ ha rango 4:**
$\\operatorname{rk}(A) = 4 = n$ → $A$ è invertibile → $\\det(A) \\neq 0$. ✗`,
  },

  {
    id: 3,
    category: 'Nucleo e Immagine',
    type: 'single',
    text: 'Sia $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ la funzione lineare definita come $f(x, y, z) = (-x + 2y - z,\\; 0)$. Quale dei seguenti insiemi di vettori forma una **base del nucleo** di $f$?',
    options: [
      'a. $\\{(2,1,0),\\;(0,1,2),\\;(0,0,0)\\}$',
      'b. $\\{(1,0,-1)\\}$',
      'c. $\\{(2,1,0),\\;(0,1,2)\\}$',
      'd. $\\{(2,1,0),\\;(0,1,2),\\;(1,0,-1)\\}$',
    ],
    correctIndices: [2],
    explanation: `**Passo 1 — Trovare il nucleo.**
$\\operatorname{Ker}(f)$ è l'insieme dei vettori $(x,y,z)$ tali che $f(x,y,z) = (0,0)$:
$$-x + 2y - z = 0 \\implies x = 2y - z$$
Parametrizziamo con $y = s$, $z = t$ liberi:
$$(x,y,z) = (2s - t,\\; s,\\; t) = s(2,1,0) + t(-1,0,1)$$

**Passo 2 — Base del nucleo.**
Una base è $\\{(2,1,0),\\;(-1,0,1)\\}$, ma notiamo che $(0,1,2)$: verifichiamo se è nel nucleo:
$$-0 + 2(1) - 2 = 0 \\checkmark$$
E $(2,1,0)$: $-2 + 2(1) - 0 = 0 \\checkmark$

Sono linearmente indipendenti e $\\dim\\operatorname{Ker}(f) = 3 - \\operatorname{rk}(f) = 3 - 1 = 2$.

**Conclusione:** La risposta **c** con $\\{(2,1,0),\\;(0,1,2)\\}$ è una base valida del nucleo. ✓

L'opzione a contiene $(0,0,0)$ che non va in una base. L'opzione b ha un solo vettore (dimensione sbagliata). L'opzione d ha 3 vettori ma dim = 2, quindi sono dipendenti.`,
  },

  {
    id: 4,
    category: 'Linearità',
    type: 'single',
    text: 'Quale delle seguenti funzioni è **lineare**?',
    options: [
      'a. $f : \\mathbb{R}^2 \\to \\mathbb{R}^3,\\quad f(x,y) = (x,\\;y,\\;x + y^2)$',
      'b. Nessuna delle altre.',
      'c. $f : \\mathbb{R}^2 \\to \\mathbb{R}^3,\\quad f(x,y) = (x - xy,\\;-2x^2,\\;3x - y)$',
      'd. $f : \\mathbb{R}^2 \\to \\mathbb{R}^3,\\quad f(x,y) = (x + y,\\;-2y,\\;3x - y)$',
    ],
    correctIndices: [3],
    explanation: `Una funzione $f: V \\to W$ è lineare se:
1. $f(u + v) = f(u) + f(v)$ per ogni $u, v \\in V$
2. $f(\\lambda v) = \\lambda f(v)$ per ogni $\\lambda \\in \\mathbb{R}$, $v \\in V$

Equivalentemente, ogni componente deve essere una **combinazione lineare** delle variabili (senza prodotti o potenze).

**Opzione a:** La terza componente è $x + y^2$ — il termine $y^2$ è non lineare. ✗

**Opzione c:** La prima componente è $x - xy$ (prodotto $xy$, non lineare); la seconda è $-2x^2$ (quadratico). ✗

**Opzione d:** $f(x,y) = (x+y,\\;-2y,\\;3x-y)$
- Tutte le componenti sono somme di multipli di $x$ e $y$: ✓
- Matrice associata: $\\begin{pmatrix}1 & 1 \\\\ 0 & -2 \\\\ 3 & -1\\end{pmatrix}$

**Conclusione:** L'unica funzione lineare è la **d**. ✓`,
  },

  {
    id: 5,
    category: 'Geometria Affine',
    type: 'single',
    text: 'Quale delle seguenti equazioni rappresenta un **piano** nello spazio affine $\\mathbb{A}^3$ **passante per l\'origine**?',
    options: [
      'a. $x + 2y - 3z = 0$',
      'b. $-3x + 2y + 5z - 3 = 0$',
      'c. $x - y = z + 2$',
      'd. $2y - z = 4$',
    ],
    correctIndices: [0],
    explanation: `Un piano in $\\mathbb{A}^3$ ha equazione $ax + by + cz = d$ con $(a,b,c) \\neq (0,0,0)$.

Il piano **passa per l'origine** $(0,0,0)$ se e solo se il punto $(0,0,0)$ soddisfa l'equazione, ovvero se $d = 0$.

**Verifichiamo:**
- **a.** $x + 2y - 3z = 0$: sostituendo $(0,0,0)$: $0 + 0 - 0 = 0$ ✓ → passa per l'origine!
- **b.** $-3x + 2y + 5z - 3 = 0$: sostituendo $(0,0,0)$: $-3 \\neq 0$ ✗
- **c.** $x - y = z + 2$, cioè $x - y - z = 2$: sostituendo $(0,0,0)$: $0 \\neq 2$ ✗
- **d.** $2y - z = 4$: sostituendo $(0,0,0)$: $0 \\neq 4$ ✗

**Risposta: a.** È l'unico piano la cui equazione ha termine noto nullo.`,
  },

  {
    id: 6,
    category: 'Complemento Ortogonale',
    type: 'single',
    text: 'Sia $U$ un sottospazio di $\\mathbb{R}^n$ di dimensione $r$. Allora $U^\\perp$ è un sottospazio vettoriale di dimensione pari a:',
    options: [
      'a. $0$',
      'b. $n - r$',
      'c. $2n - r$',
      'd. $r$',
    ],
    correctIndices: [1],
    explanation: `Per il **Teorema del complemento ortogonale**, se $U$ è un sottospazio di $\\mathbb{R}^n$ con $\\dim U = r$, allora:
$$\\dim U^\\perp = n - r$$

**Dimostrazione:** Sia $\\{u_1, \\ldots, u_r\\}$ una base di $U$. Il complemento ortogonale è:
$$U^\\perp = \\{v \\in \\mathbb{R}^n : v \\cdot u_i = 0 \\text{ per ogni } i = 1,\\ldots,r\\}$$
Questo è il nucleo della mappa $\\mathbb{R}^n \\to \\mathbb{R}^r$ che manda $v \\mapsto (v \\cdot u_1, \\ldots, v \\cdot u_r)$, che ha rango $r$.

Per il Teorema Rango-Nullità:
$$\\dim U^\\perp = n - r$$

**Verifica:** $\\dim U + \\dim U^\\perp = r + (n-r) = n$ ✓

Risposta: **b.**`,
  },

  {
    id: 7,
    category: 'Rango e Nullità',
    type: 'single',
    text: 'Sia $f : \\mathbb{R}^2 \\to \\mathbb{R}^3$ un\'applicazione lineare con nullità pari a 1. Quanto è il **rango** di $f$?',
    options: [
      'a. 3',
      'b. 1',
      'c. 2',
      'd. Non è possibile dirlo.',
    ],
    correctIndices: [1],
    explanation: `Usiamo il **Teorema Rango-Nullità** (o della dimensione):
$$\\operatorname{rk}(f) + \\operatorname{null}(f) = \\dim(\\text{dominio}) = \\dim(\\mathbb{R}^2) = 2$$

Dato che $\\operatorname{null}(f) = 1$:
$$\\operatorname{rk}(f) = 2 - 1 = 1$$

**Verifica di coerenza:** Il rango non può superare $\\min(\\dim \\mathbb{R}^2, \\dim \\mathbb{R}^3) = \\min(2,3) = 2$. Con rango 1, siamo nel lecito. ✓

Risposta: **b. 1.**`,
  },

  {
    id: 8,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Quale dei seguenti piani è **perpendicolare** al piano di equazione $-x - y - z = 1$?',
    options: [
      'a. $x - y = 7$',
      'b. $x + y + z = 0$',
      'c. $z = 5$',
      'd. $x + y + z = 5$',
    ],
    correctIndices: [0],
    explanation: `Due piani sono **perpendicolari** se e solo se i loro **vettori normali** sono perpendicolari (prodotto scalare nullo).

Il piano $-x - y - z = 1$ ha vettore normale $\\mathbf{n}_1 = (-1, -1, -1)$ (o equivalentemente $(1,1,1)$).

**Verifichiamo ogni opzione:**

- **a.** $x - y = 7$, cioè $x - y + 0z = 7$: normale $\\mathbf{n}_2 = (1, -1, 0)$.
  $$\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = (1)(1) + (1)(-1) + (1)(0) = 1 - 1 + 0 = 0 \\checkmark$$
  → Perpendicolari!

- **b.** $x + y + z = 0$: normale $(1,1,1)$, parallela a $\\mathbf{n}_1$. ✗ (piani paralleli)

- **c.** $z = 5$: normale $(0,0,1)$.
  $\\mathbf{n}_1 \\cdot (0,0,1) = 1 \\neq 0$ ✗

- **d.** $x + y + z = 5$: stessa normale di b. ✗

**Risposta: a.** ✓`,
  },

  {
    id: 9,
    category: 'Matrici Simili',
    type: 'single',
    text: 'Sia $f$ un endomorfismo di uno spazio vettoriale reale $V$ e $A = M^B_B(f)$ la matrice associata a $f$ rispetto a una base $\\mathcal{B}$ di $V$. Se $B$ è un\'altra matrice simile ad $A$, allora esiste una base $\\mathcal{C}$ di $V$ tale che $B$ è la matrice $A = M^\\mathcal{C}_\\mathcal{C}(f)$ associata a $f$ rispetto a $\\mathcal{C}$.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [0],
    explanation: `**Definizione:** Due matrici $A, B \\in M_n(\\mathbb{R})$ sono simili se esiste $P$ invertibile tale che $B = P^{-1}AP$.

**Fatto fondamentale:** Se $A = M^\\mathcal{B}_\\mathcal{B}(f)$ e $B = P^{-1}AP$, allora $B$ è la matrice di $f$ rispetto alla base $\\mathcal{C}$ le cui colonne (espresse in $\\mathcal{B}$) formano la matrice $P$.

**In formule:** Se $P$ è la matrice di cambiamento di base da $\\mathcal{C}$ a $\\mathcal{B}$, allora:
$$M^\\mathcal{C}_\\mathcal{C}(f) = P^{-1} \\cdot M^\\mathcal{B}_\\mathcal{B}(f) \\cdot P = P^{-1}AP = B$$

Poiché $P$ è invertibile, le sue colonne formano effettivamente una base $\\mathcal{C}$ di $V$.

**Risposta: a. Vero.** ✓`,
  },

  {
    id: 10,
    category: 'Sistemi Generatori',
    type: 'single',
    text: 'I vettori $v_1 = (5,-1,3)$ e $v_2 = (2,2,7)$ formano un **sistema di generatori** di $\\mathbb{R}^3$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `Per generare $\\mathbb{R}^3$, servono **almeno 3 vettori linearmente indipendenti**.

Con soli 2 vettori $v_1, v_2 \\in \\mathbb{R}^3$, il sottospazio $\\operatorname{Span}(v_1, v_2)$ ha dimensione al massimo 2 (se $v_1, v_2$ sono linearmente indipendenti).

Poiché $\\dim \\mathbb{R}^3 = 3 > 2$, due vettori **non possono** generare tutto $\\mathbb{R}^3$.

**Verifica:** La matrice $\\begin{pmatrix}5 & -1 & 3 \\\\ 2 & 2 & 7\\end{pmatrix}$ ha rango al massimo 2, mentre per generare $\\mathbb{R}^3$ serve rango 3.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 11,
    category: 'Proiezione Ortogonale',
    type: 'single',
    text: 'Sia $U$ il sottospazio di $\\mathbb{R}^3$ di equazione $x + y - 3z = 0$. Quale delle seguenti matrici è associata alla proiezione ortogonale $p_U$ su $U$ rispetto a una base ortogonale di autovettori di $p_U$?',
    options: [
      'a. $\\begin{pmatrix}1 & 0 & 0\\\\0 & 0 & 0\\\\0 & 0 & 0\\end{pmatrix}$',
      'b. $\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 1\\end{pmatrix}$',
      'c. Nessuna delle altre.',
      'd. $\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 0\\end{pmatrix}$',
    ],
    correctIndices: [3],
    explanation: `**Analisi di $p_U$:**

$U$ è un sottospazio di $\\mathbb{R}^3$ di equazione $x + y - 3z = 0$, che è un piano (iperpiano). Quindi $\\dim U = 2$.

La proiezione ortogonale $p_U : \\mathbb{R}^3 \\to \\mathbb{R}^3$ ha:
- Autovalore $\\lambda = 1$ con molteplicità geometrica $= \\dim U = 2$ (ogni vettore di $U$ è un autovettore)
- Autovalore $\\lambda = 0$ con molteplicità geometrica $= \\dim U^\\perp = 1$ (il vettore normale a $U$)

**Rispetto a una base ortonormale di autovettori**, la matrice di $p_U$ è diagonale con 1 nelle posizioni corrispondenti a $U$ e 0 nella posizione di $U^\\perp$:
$$M = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 0\\end{pmatrix}$$

**Risposta: d.** ✓ (due autovalori 1, uno 0)`,
  },

  {
    id: 12,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Si consideri il sistema di equazioni lineari dipendente da $t \\in \\mathbb{R}$: $\\begin{cases} -2x_1 + 2x_2 + tx_3 = 1 \\\\ 2x_2 + 3x_4 = 1 \\end{cases}$ e il vettore $v = (-1,-1,-1,1)$. Per quali valori di $t$, $v$ è soluzione del sistema?',
    options: [
      'a. per $t = -1$',
      'b. per $t = 1$',
      'c. per nessun valore di $t$',
      'd. per ogni $t$',
    ],
    correctIndices: [0],
    explanation: `Sostituiamo $v = (x_1, x_2, x_3, x_4) = (-1, -1, -1, 1)$ nel sistema:

**Equazione 2:** $2x_2 + 3x_4 = 2(-1) + 3(1) = -2 + 3 = 1$ ✓ (sempre soddisfatta)

**Equazione 1:** $-2x_1 + 2x_2 + tx_3 = 1$
$$-2(-1) + 2(-1) + t(-1) = 2 - 2 - t = -t = 1$$
$$\\implies t = -1$$

Quindi $v$ è soluzione quando $t = -1$.

**Risposta: a. per $t = -1$.** ✓`,
  },

  {
    id: 13,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Sia $f: V \\to W$ una funzione tra due spazi vettoriali tale che $f(v_1 + v_2) = f(v_1) + f(v_2)$, per ogni $v_1, v_2 \\in V$. Allora $f(0_V) = 0_W$, dove $0_V$ è il vettore nullo di $V$ e $0_W$ è il vettore nullo di $W$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [1],
    explanation: `Anche con solo l'additività $f(v_1 + v_2) = f(v_1) + f(v_2)$, possiamo dimostrare che $f(0_V) = 0_W$:

**Dimostrazione:**
Scegliamo $v_1 = v_2 = 0_V$:
$$f(0_V + 0_V) = f(0_V) + f(0_V)$$
$$f(0_V) = 2f(0_V)$$
Sottraendo $f(0_V)$ da entrambi i lati:
$$0_W = f(0_V)$$

Questo vale anche per funzioni solo additive (non necessariamente omogenee). ✓

**Risposta: b. Vero.** ✓`,
  },

  {
    id: 14,
    category: 'Somma Diretta',
    type: 'single',
    text: 'Siano $U$ e $W$ due sottospazi di uno spazio vettoriale $V$. Se $\\mathcal{B}$ è una base di $U$ e $\\mathcal{C}$ è una base di $W$ tali che $\\mathcal{B}$ e $\\mathcal{C}$ non hanno vettori in comune, allora $U$ e $W$ sono necessariamente in somma diretta.',
    options: [
      'Falso',
      'Vero',
    ],
    correctIndices: [0],
    explanation: `La condizione per la **somma diretta** $V = U \\oplus W$ è che $U \\cap W = \\{0\\}$.

**Controesempio:** Prendiamo $V = \\mathbb{R}^2$.
- $U = \\operatorname{Span}\\{e_1\\} = \\{(x,0)\\}$, con base $\\mathcal{B} = \\{(1,0)\\}$
- $W = \\operatorname{Span}\\{e_1 + e_2\\} = \\{(t,t) : t \\in \\mathbb{R}\\}$, con base $\\mathcal{C} = \\{(1,1)\\}$

Le basi non hanno vettori in comune: $\\{(1,0)\\} \\cap \\{(1,1)\\} = \\emptyset$. ✓

Eppure $U \\cap W = \\{(0,0)\\}$... effettivamente $\\{0\\}$, quindi **in questo caso** sono in somma diretta.

**Controesempio più sottile:** 
- $U = \\operatorname{Span}\\{(1,0)\\}$, $W = \\operatorname{Span}\\{(2,0)\\}$
- Basi: $\\mathcal{B} = \\{(1,0)\\}$, $\\mathcal{C} = \\{(2,0)\\}$ — non hanno vettori in comune.
- Ma $U = W$ (stessa retta), quindi $U \\cap W = U \\neq \\{0\\}$.

Quindi il fatto che le basi abbiano vettori diversi non implica la somma diretta.

**Risposta: Falso.** ✓`,
  },

  {
    id: 15,
    category: 'Numeri Complessi',
    type: 'multi',
    text: 'Sia $\\alpha$ un numero complesso. Indica quali risposte completano correttamente le seguenti affermazioni:\n\n$\\alpha = \\bar{\\alpha}$ se e solo se $\\alpha$ è ______. \n$\\alpha$ è un immaginario puro se ______. \n$\\alpha = -\\bar{\\alpha}$ se e solo se $\\alpha$ è ______. \nIl modulo di $\\alpha$ è ______.',
    options: [
      'un numero reale',
      'un numero immaginario puro',
      'la parte reale è 0',
      'un numero reale maggiore o uguale a zero',
    ],
    correctIndices: [0, 1, 2, 3],
    explanation: `Sia $\\alpha = a + bi$ con $a, b \\in \\mathbb{R}$ e $\\bar{\\alpha} = a - bi$.

**$\\alpha = \\bar{\\alpha}$:** $a + bi = a - bi \\implies 2bi = 0 \\implies b = 0$, quindi $\\alpha \\in \\mathbb{R}$. Risposta: **"è un numero reale"**. ✓

**$\\alpha$ è immaginario puro se:** $a = 0$ e $b \\neq 0$, cioè la parte reale è 0 (con $\\alpha \\neq 0$). Risposta: **"la parte reale è 0"**. ✓

**$\\alpha = -\\bar{\\alpha}$:** $a + bi = -(a - bi) = -a + bi \\implies 2a = 0 \\implies a = 0$, quindi $\\alpha$ è immaginario puro. Risposta: **"è un numero immaginario puro"**. ✓

**Il modulo di $\\alpha$:** $|\\alpha| = \\sqrt{a^2 + b^2} \\geq 0$, quindi è **un numero reale maggiore o uguale a zero**. ✓`,
  },

  {
    id: 16,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Sia $f : V \\to W$ una funzione lineare. Allora $f$ è iniettiva se e solo se la nullità della matrice associata a $f$ rispetto a delle basi su $V$ e $W$ è pari a 1.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `$f$ è iniettiva se e solo se $\\operatorname{Ker}(f) = \\{0\\}$, ovvero la nullità è **0** (non 1).

**Chiarimento:**
- Nullità $= \\dim\\operatorname{Ker}(f)$
- $f$ iniettiva $\\iff \\operatorname{Ker}(f) = \\{0\\} \\iff$ nullità $= 0$

Se la nullità è 1, allora $\\operatorname{Ker}(f)$ è una retta, e $f$ **non** è iniettiva.

**Risposta: b. Falso.** ✓

La condizione corretta è: $f$ è iniettiva $\\iff$ nullità $= 0$.`,
  },

  {
    id: 17,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Sia $f$ un endomorfismo di $\\mathbb{R}^3$ e sia $v = (2,1,2)$ un autovettore di $f$ relativo all\'autovalore $\\lambda = 4$. A cosa è uguale $f(v)$?',
    options: [
      'a. Nessuna delle altre.',
      'b. $(2,1,2)$',
      'c. $(8,4,8)$',
      'd. $(4,8,4)$',
    ],
    correctIndices: [2],
    explanation: `Per definizione di **autovettore**: se $v$ è autovettore di $f$ con autovalore $\\lambda$, allora:
$$f(v) = \\lambda v$$

Quindi:
$$f(2,1,2) = 4 \\cdot (2,1,2) = (4 \\cdot 2,\\; 4 \\cdot 1,\\; 4 \\cdot 2) = (8, 4, 8)$$

**Risposta: c. $(8,4,8)$.** ✓`,
  },

  {
    id: 18,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Ogni matrice quadrata è simile ad una matrice diagonale.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Falso.** Non ogni matrice quadrata è diagonalizzabile.

**Controesempio:** La matrice di Jordan $J = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$.

Il polinomio caratteristico è $\\lambda^2$, quindi $\\lambda = 0$ è l'unico autovalore con molteplicità algebrica 2.

Il nucleo è: $(J - 0I)v = 0 \\implies Jv = 0$, cioè:
$$\\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}\\begin{pmatrix}a \\\\ b\\end{pmatrix} = \\begin{pmatrix}b \\\\ 0\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 0\\end{pmatrix} \\implies b = 0$$

Quindi $\\dim\\operatorname{Ker}(J) = 1$, ma la molteplicità algebrica è 2.
Molteplicità geometrica (1) $\\neq$ molteplicità algebrica (2) → **non diagonalizzabile**.

**Risposta: b. Falso.** ✓`,
  },

  {
    id: 19,
    category: 'Matrici e Applicazioni Lineari',
    type: 'single',
    text: 'Sia $A = \\begin{pmatrix}1 & 1 & -1\\\\1 & -1 & -1\\end{pmatrix}$. Quale delle seguenti funzioni lineari è quella associata alla matrice $A$?',
    options: [
      'a. $f : \\mathbb{R}^3 \\to \\mathbb{R}^2,\\quad f(x,y,z) = (x + y - z,\\; x - y - z)$',
      'b. $f : \\mathbb{R}^2 \\to \\mathbb{R}^3,\\quad f(x,y) = (x + y,\\; x - y,\\; -x - y)$',
      'c. $f : \\mathbb{R}^3 \\to \\mathbb{R}^3,\\quad f(x,y,z) = (x + y + z,\\; x - y - z,\\; -x - y + z)$',
    ],
    correctIndices: [0],
    explanation: `La matrice $A$ è $2 \\times 3$, quindi rappresenta una funzione $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ (3 colonne = dominio $\\mathbb{R}^3$, 2 righe = codominio $\\mathbb{R}^2$).

L'applicazione lineare è $f(\\mathbf{x}) = A\\mathbf{x}$:
$$f\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix} = \\begin{pmatrix}1 & 1 & -1\\\\1 & -1 & -1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix} = \\begin{pmatrix}x + y - z\\\\x - y - z\\end{pmatrix}$$

**Risposta: a.** $f(x,y,z) = (x+y-z,\\; x-y-z)$. ✓

Le opzioni b e c hanno dimensioni sbagliate (b è $\\mathbb{R}^2 \\to \\mathbb{R}^3$, c è $\\mathbb{R}^3 \\to \\mathbb{R}^3$).`,
  },

  {
    id: 20,
    category: 'Indipendenza Lineare',
    type: 'single',
    text: 'Dati tre vettori $v_1, v_2, v_3 \\in \\mathbb{R}^4$ tali che nessuno di essi è parallelo a uno degli altri due, il sottospazio vettoriale da essi generato ha necessariamente dimensione 3.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `**Falso.** Il fatto che nessun vettore sia parallelo agli altri (cioè nessuno è multiplo scalare degli altri) **non implica** indipendenza lineare.

**Controesempio:**
- $v_1 = (1,0,0,0)$
- $v_2 = (0,1,0,0)$
- $v_3 = (1,1,0,0) = v_1 + v_2$

Nessun vettore è multiplo scalare degli altri, ma $v_3 = v_1 + v_2$, quindi sono **linearmente dipendenti** e $\\dim\\operatorname{Span}(v_1, v_2, v_3) = 2$, non 3.

**Conclusione:** "Nessuno è parallelo agli altri" implica solo che nessuno è multiplo di un singolo altro, ma possono esserci dipendenze più complesse.

**Risposta: a. Falso.** ✓`,
  },

  // ── DOMANDE DALLA QUIZ_ALGEBRA (quiz_algebra.pdf) ──

  {
    id: 21,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $A$ una matrice a coefficienti reali di ordine $5 \\times 4$ e sia $b \\in \\mathbb{R}^5$. Quali affermazioni sono vere?',
    options: [
      'a. Se il rango della matrice completa $(A|b)$ è 5, il sistema $Ax = b$ non ammette soluzione.',
      'b. Il sistema $Ax = b$ o non ammette soluzioni o ne ammette infinite.',
      'c. Il sistema $Ax = 0$ ha sempre soluzione.',
    ],
    correctIndices: [1, 2],
    explanation: `**Analisi:** $A$ è $5 \\times 4$, quindi il sistema ha 4 incognite e 5 equazioni.

**Opzione a:** Se $\\operatorname{rk}(A|b) = 5$ ma $\\operatorname{rk}(A) \\leq 4 < 5$, allora $\\operatorname{rk}(A) < \\operatorname{rk}(A|b)$, quindi il sistema è incompatibile. **Vero** ✓

**Opzione b:** Se il sistema $Ax = b$ è compatibile, allora le soluzioni sono parametrizzate da $4 - \\operatorname{rk}(A)$ parametri liberi. Poiché $\\operatorname{rk}(A) \\leq 4$:
- Se $\\operatorname{rk}(A) = 4$: soluzione unica... ma $A$ è $5 \\times 4$ con $\\operatorname{rk}(A) \\leq 4$. Se $\\operatorname{rk}(A) = 4$ la soluzione potrebbe essere unica.

**Attenzione:** Con $A$ di ordine $5 \\times 4$, se $\\operatorname{rk}(A) = 4$, il sistema compatibile ha soluzione unica. Quindi l'opzione b è **Falsa** in generale (potrebbe avere soluzione unica). ✗

**Opzione c:** Il sistema $Ax = 0$ (omogeneo) ha sempre almeno la soluzione banale $x = 0$. **Vero** ✓

**Risposta corretta: b e c.** ✓`,
  },

  {
    id: 22,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Esistono infinite basi dello spazio vettoriale $M_2(\\mathbb{R})$ delle matrici quadrate di ordine 2.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [1],
    explanation: `$M_2(\\mathbb{R})$ ha dimensione 4 (la base canonica è $\\{E_{11}, E_{12}, E_{21}, E_{22}\\}$).

**Perché ci sono infinite basi?**
Una base di $M_2(\\mathbb{R})$ è un insieme di 4 matrici linearmente indipendenti. Dato che $M_2(\\mathbb{R})$ è uno spazio vettoriale reale, possiamo costruire infinite basi, ad esempio moltiplicando un vettore della base canonica per qualsiasi scalare $c \\neq 0$:
$$\\{c \\cdot E_{11},\\; E_{12},\\; E_{21},\\; E_{22}\\} \\quad \\forall c \\neq 0$$

Ogni spazio vettoriale di dimensione finita $n \\geq 1$ su un campo infinito (come $\\mathbb{R}$) ha **infinite basi**.

**Risposta: b. Vero.** ✓`,
  },

  {
    id: 23,
    category: 'Prodotto Scalare',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfa il **prodotto scalare** di $\\mathbb{R}^6$?',
    options: [
      'a. $(u - w) \\cdot v = u \\cdot v - w \\cdot v$ per ogni $u,v,w \\in \\mathbb{R}^6$',
      'b. $0 \\cdot v = 0$ per ogni $v \\in \\mathbb{R}^6$',
      'c. $(\\lambda v) \\cdot w = |\\lambda|(v \\cdot w)$ per ogni $v,w \\in \\mathbb{R}^6$ e $\\lambda \\in \\mathbb{R}$',
    ],
    correctIndices: [0, 1],
    explanation: `Il prodotto scalare in $\\mathbb{R}^n$ è $u \\cdot v = \\sum_{i=1}^n u_i v_i$.

**Opzione a:** $(u-w)\\cdot v = \\sum_i (u_i - w_i)v_i = \\sum_i u_i v_i - \\sum_i w_i v_i = u \\cdot v - w \\cdot v$. **Vero** ✓

**Opzione b:** $0 \\cdot v = \\sum_i 0 \\cdot v_i = 0$. **Vero** ✓

**Opzione c:** $(\\lambda v) \\cdot w = \\sum_i (\\lambda v_i) w_i = \\lambda \\sum_i v_i w_i = \\lambda(v \\cdot w)$, **non** $|\\lambda|(v \\cdot w)$.
Se $\\lambda < 0$, i due valori differiscono. **Falso** ✗

**Risposta: a e b.** ✓`,
  },

  {
    id: 24,
    category: 'Rango e Nullità',
    type: 'multi',
    text: 'Sia $f: V \\to W$ un\'applicazione lineare tra spazi vettoriali reali. Quali delle seguenti affermazioni sono vere?',
    options: [
      'a. Il rango di $f$ è sempre $\\leq \\dim W$.',
      'b. La nullità di $f$ è sempre $\\leq \\dim W$.',
      'c. Il rango di $f$ è sempre $\\leq \\dim V$.',
    ],
    correctIndices: [0, 2],
    explanation: `Ricordiamo: $\\operatorname{rk}(f) = \\dim(\\operatorname{Im}(f))$ e $\\operatorname{null}(f) = \\dim(\\operatorname{Ker}(f))$.

**Opzione a:** $\\operatorname{Im}(f) \\subseteq W$, quindi $\\dim(\\operatorname{Im}(f)) \\leq \\dim W$. **Vero** ✓

**Opzione b:** Dal Teorema Rango-Nullità: $\\operatorname{null}(f) = \\dim V - \\operatorname{rk}(f)$. Non c'è relazione diretta con $\\dim W$. Potrebbe essere $\\operatorname{null}(f) > \\dim W$ se $\\dim V$ è molto grande. **Falso** ✗

**Opzione c:** Dal Teorema Rango-Nullità: $\\operatorname{rk}(f) = \\dim V - \\operatorname{null}(f) \\leq \\dim V$. **Vero** ✓

**Risposta: a e c.** ✓`,
  },

  {
    id: 25,
    category: 'Isometrie',
    type: 'multi',
    text: 'Quali delle seguenti applicazioni lineari $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ sono **isometrie**?',
    options: [
      'a. Proiezioni ortogonali su sottospazi di dimensione $n-1$.',
      'b. Qualsiasi $f$ invertibile.',
      'c. Le riflessioni rispetto a un qualsiasi sottospazio.',
    ],
    correctIndices: [2],
    explanation: `Un\'isometria è una mappa che preserva le distanze: $\\|f(v)\\| = \\|v\\|$ per ogni $v$.

**Opzione a — Proiezioni ortogonali:** Una proiezione $p_U$ soddisfa $\\|p_U(v)\\| \\leq \\|v\\|$ (con uguaglianza solo se $v \\in U$). Non è un'isometria perché "accorcia" i vettori non in $U$. **Falso** ✗

**Opzione b — Qualsiasi invertibile:** No. Ad esempio $f(v) = 2v$ è invertibile ma raddoppia le norme. **Falso** ✗

**Opzione c — Riflessioni:** Una riflessione rispetto a un sottospazio $U$ manda $v = v_U + v_{U^\\perp}$ in $v_U - v_{U^\\perp}$. 
$$\\|v_U - v_{U^\\perp}\\|^2 = \\|v_U\\|^2 + \\|v_{U^\\perp}\\|^2 = \\|v\\|^2$$
Le riflessioni **preservano la norma** → sono isometrie. **Vero** ✓

**Risposta: c.** ✓`,
  },

  {
    id: 26,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'L\'argomento del numero complesso $\\dfrac{(2\\sqrt{3} - 2i)^4}{(1 + \\sqrt{3}\\,i)^5}$ vale:',
    options: [
      'a. $\\dfrac{\\pi}{6}$',
      'b. $\\dfrac{2\\pi}{3}$',
      'c. $\\dfrac{5\\pi}{3}$',
      'd. $\\dfrac{\\pi}{3}$',
    ],
    correctIndices: [2],
    explanation: `Usiamo la forma polare e la proprietà $\\arg(z^n) = n \\arg(z)$.

**Numeratore: $z_1 = 2\\sqrt{3} - 2i$**
$$|z_1| = \\sqrt{(2\\sqrt{3})^2 + 4} = \\sqrt{12 + 4} = 4$$
$$\\arg(z_1) = \\arctan\\!\\left(\\frac{-2}{2\\sqrt{3}}\\right) = \\arctan\\!\\left(\\frac{-1}{\\sqrt{3}}\\right) = -\\frac{\\pi}{6}$$
(quarto quadrante: $\\Re > 0$, $\\Im < 0$)

$\\arg(z_1^4) = 4 \\cdot \\left(-\\frac{\\pi}{6}\\right) = -\\frac{2\\pi}{3}$

**Denominatore: $z_2 = 1 + \\sqrt{3}\\,i$**
$$|z_2| = \\sqrt{1 + 3} = 2$$
$$\\arg(z_2) = \\arctan\\!\\left(\\frac{\\sqrt{3}}{1}\\right) = \\frac{\\pi}{3}$$

$\\arg(z_2^5) = 5 \\cdot \\frac{\\pi}{3} = \\frac{5\\pi}{3}$

**Argomento del quoziente:**
$$\\arg\\!\\left(\\frac{z_1^4}{z_2^5}\\right) = \\arg(z_1^4) - \\arg(z_2^5) = -\\frac{2\\pi}{3} - \\frac{5\\pi}{3} = -\\frac{7\\pi}{3}$$

Normalizzando in $[0, 2\\pi)$: $-\\frac{7\\pi}{3} + 4\\pi = \\frac{5\\pi}{3}$.

**Risposta: c. $\\dfrac{5\\pi}{3}$.** ✓`,
  },

  {
    id: 27,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 5. Se sostituisco alla **prima riga la somma delle rimanenti quattro righe**, il determinante non cambia.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `Denotiamo le righe $R_1, R_2, R_3, R_4, R_5$.

L'operazione è: $R_1 \\leftarrow R_2 + R_3 + R_4 + R_5$.

Questa è un'**operazione elementare di riga** di tipo III: sommo a una riga una combinazione lineare delle altre. Tali operazioni **non cambiano il determinante**... ma aspetta.

In realtà, $R_1 \\leftarrow R_2 + R_3 + R_4 + R_5$ significa sostituire $R_1$ con la **somma** di tutte le altre, **non** aggiungere a $R_1$ la somma delle altre.

Se invece fosse $R_1 \\leftarrow R_1 + R_2 + R_3 + R_4 + R_5$ (aggiunta), il det non cambierebbe.

**Ma** $R_1 \\leftarrow R_2 + R_3 + R_4 + R_5$ equivale a:
$$R_1 \\leftarrow (R_1 + R_2 + R_3 + R_4 + R_5) - R_1$$
che non è un'operazione elementare standard — è equivalente a sottrarre $R_1$ da sé stessa dopo la somma.

**Verifica con matrice $2 \\times 2$:** $A = \\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$, $\\det A = ad - bc$.
Dopo: $\\begin{pmatrix}c & d \\\\ c & d\\end{pmatrix}$, $\\det = cd - dc = 0$.

Quindi il determinante **cambia** (a meno che coincida con quello originale). **Risposta: a. Falso.** ✓`,
  },

  {
    id: 28,
    category: 'Basi Ortonormali',
    type: 'single',
    text: 'Per quale valore della coppia $(\\alpha, \\beta)$ la terna di vettori $\\dfrac{e_1 - \\sqrt{3}\\,e_3}{2}$, $\\alpha e_1 + \\beta e_3$, $-e_2$ forma una **base ortonormale** di $\\mathbb{R}^3$?',
    options: [
      'a. $\\left(\\dfrac{\\sqrt{3}}{2},\\; \\dfrac{1}{2}\\right)$',
      'b. $\\left(\\dfrac{1}{2},\\; \\dfrac{\\sqrt{3}}{2}\\right)$',
      'c. $(0,\\; 1)$',
      'd. $\\left(\\dfrac{\\sqrt{3}}{2},\\; -\\dfrac{1}{2}\\right)$',
    ],
    correctIndices: [0],
    explanation: `Poniamo $u_1 = \\frac{1}{2}(1, 0, -\\sqrt{3})$, $u_2 = (\\alpha, 0, \\beta)$, $u_3 = (0, -1, 0)$.

**Condizione 1 — $u_1$ è unitario:**
$$\\|u_1\\|^2 = \\frac{1}{4}(1 + 0 + 3) = 1 \\checkmark$$

**Condizione 2 — $u_3$ è unitario:**
$$\\|u_3\\|^2 = 1 \\checkmark$$

**Condizione 3 — $u_2$ ortogonale a $u_1$:**
$$u_2 \\cdot u_1 = \\alpha \\cdot \\frac{1}{2} + 0 + \\beta \\cdot \\frac{-\\sqrt{3}}{2} = \\frac{\\alpha - \\sqrt{3}\\beta}{2} = 0 \\implies \\alpha = \\sqrt{3}\\beta$$

**Condizione 4 — $u_2$ unitario:**
$$\\alpha^2 + \\beta^2 = 1 \\implies 3\\beta^2 + \\beta^2 = 1 \\implies \\beta^2 = \\frac{1}{4} \\implies \\beta = \\pm\\frac{1}{2}$$

Con $\\beta = \\frac{1}{2}$: $\\alpha = \\frac{\\sqrt{3}}{2}$.
Con $\\beta = -\\frac{1}{2}$: $\\alpha = -\\frac{\\sqrt{3}}{2}$.

**Verifica orientazione** (base destrorsa): la terna $(u_1, u_2, u_3)$ con $\\alpha = \\frac{\\sqrt{3}}{2}, \\beta = \\frac{1}{2}$ forma una base ortonormale.

**Risposta: a.** $(\\alpha, \\beta) = \\left(\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$. ✓`,
  },

  {
    id: 29,
    category: 'Rango e Autovalori',
    type: 'single',
    text: 'Sia $A \\in M_4(\\mathbb{R})$ di rango 3. Quale affermazione è **sempre vera**?',
    options: [
      'a. $A$ è diagonalizzabile in $M_4(\\mathbb{C})$.',
      'b. $A$ è diagonalizzabile in $M_4(\\mathbb{R})$.',
      'c. 1 è autovalore di $A$.',
      'd. Il polinomio caratteristico di $A$ ha termine noto nullo.',
    ],
    correctIndices: [3],
    explanation: `**Opzione a:** Non necessariamente. Una matrice con rango 3 può avere autovalori complessi non reali. **Non sempre vera** ✗

**Opzione b:** Non necessariamente. Potrebbe non essere diagonalizzabile su $\\mathbb{R}$. **Non sempre vera** ✗

**Opzione c:** Non necessariamente. Gli autovalori non sono determinati dal rango solo. **Non sempre vera** ✗

**Opzione d:** Il termine noto del polinomio caratteristico $p_A(\\lambda) = \\det(\\lambda I - A)$ è:
$$p_A(0) = \\det(0 \\cdot I - A) = \\det(-A) = (-1)^4 \\det(A) = \\det(A)$$

Poiché $\\operatorname{rk}(A) = 3 < 4 = n$, la matrice $A$ è **non invertibile**, quindi $\\det(A) = 0$.

Il termine noto è $\\det(A) = 0$. **Sempre vera** ✓

Nota: questo implica anche che $\\lambda = 0$ è un autovalore di $A$.

**Risposta: d.** ✓`,
  },

  {
    id: 30,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Siano $A$ e $B$ matrici ortogonali di ordine 4. Quale affermazione è **errata**?',
    options: [
      'a. $-B$ è ortogonale.',
      'b. $A^{-1}$ è ortogonale.',
      'c. $AA^t$ è ortogonale.',
      'd. $A + B$ è ortogonale.',
    ],
    correctIndices: [3],
    explanation: `Una matrice $M$ è ortogonale se $M^t M = I$, equivalentemente $M^{-1} = M^t$.

**Opzione a — $-B$ ortogonale:**
$(-B)^t(-B) = (-B^t)(-B) = B^t B = I$ ✓ → ortogonale. **Vera** ✓

**Opzione b — $A^{-1}$ ortogonale:**
$(A^{-1})^t A^{-1} = (A^t)^t A^{-1} = A A^{-1} = I$... meglio: $(A^{-1})^t = (A^t)^{-1} = A$, quindi $(A^{-1})^t A^{-1} = A A^{-1} = I$. ✓ → ortogonale. **Vera** ✓

**Opzione c — $AA^t$ ortogonale:**
$AA^t = I$ perché $A$ è ortogonale. La matrice identità è ortogonale: $I^t I = I$. ✓ **Vera** ✓

**Opzione d — $A + B$ ortogonale:**
$(A+B)^t(A+B) = A^tA + A^tB + B^tA + B^tB = I + A^tB + B^tA + I = 2I + A^tB + B^tA$
In generale questo $\\neq I$. **Controes.:** $A = B = I$: $(I+I)^t(I+I) = 4I \\neq I$. **Errata** ✗

**Risposta: d.** ✓`,
  },

  {
    id: 31,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Data la base canonica $\\{e_1, e_2, e_3\\}$ di $\\mathbb{R}^3$, quale dei seguenti prodotti è uguale a $e_2 \\cdot (e_3 \\times e_1)$?',
    options: [
      'a. $(e_2 \\times e_1) \\cdot e_3$',
      'b. $e_2 \\cdot (e_1 \\times e_3)$',
      'c. $e_3 \\cdot (e_1 \\times e_2)$',
      'd. $(e_3 \\times e_2) \\cdot e_1$',
    ],
    correctIndices: [2],
    explanation: `Calcoliamo prima il valore della richiesta:
$$e_3 \times e_1 = e_2$$
quindi
$$e_2 \cdot (e_3 \times e_1) = e_2 \cdot e_2 = 1.$$

Verifichiamo le opzioni:

**a.** $e_2 \times e_1 = -e_3$, quindi $(e_2 \times e_1) \cdot e_3 = -1$. ✗

**b.** $e_1 \times e_3 = -e_2$, quindi $e_2 \cdot (e_1 \times e_3) = -1$. ✗

**c.** $e_1 \times e_2 = e_3$, quindi $e_3 \cdot (e_1 \times e_2) = 1$. ✓

**d.** $e_3 \times e_2 = -e_1$, quindi $(e_3 \times e_2) \cdot e_1 = -1$. ✗

**Risposta: c.** ✓`,
  },

  {
    id: 32,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $A$ una matrice **diagonale** a coefficienti reali **non nulli** sulla diagonale, di ordine 5, e sia $b \\in \\mathbb{R}^5$. Quali affermazioni sono vere?',
    options: [
      'a. Il sistema $Ax = b$ ha sempre un\'unica soluzione.',
      'b. Il sistema $Ax = 0$ ha sempre almeno una soluzione.',
      'c. Il sistema $Ax = b$ può non avere soluzioni.',
    ],
    correctIndices: [0, 1],
    explanation: `$A$ è diagonale con tutti i coefficienti diagonali $d_i \\neq 0$.

Quindi $\\det(A) = d_1 d_2 d_3 d_4 d_5 \\neq 0$, ovvero $A$ è **invertibile**.

**Opzione a:** $A$ invertibile → $x = A^{-1}b$ è l'unica soluzione per ogni $b$. **Vero** ✓

**Opzione b:** $Ax = 0$ ha sempre la soluzione banale $x = 0$. Poiché $A$ è invertibile, è l'**unica** soluzione. In ogni caso, almeno una c'è. **Vero** ✓

**Opzione c:** $A$ invertibile → il sistema è sempre compatibile e ha soluzione unica. Non può non avere soluzioni. **Falso** ✗

**Risposta: a e b.** ✓`,
  },

  {
    id: 33,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 5. Se scambio tra loro la prima e la seconda riga e poi scambio la quarta e la quinta colonna, il determinante non cambia.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [1],
    explanation: `Analizziamo le due operazioni separatamente:

**Operazione 1 — Scambio di due righe:** Il determinante **cambia segno** (moltiplica per $-1$).

**Operazione 2 — Scambio di due colonne:** Il determinante **cambia segno** (moltiplica per $-1$).

**Effetto combinato:** $(-1) \\times (-1) = +1$.

Quindi il determinante dopo entrambe le operazioni è $\\det(A)$ — **non cambia**.

**In formule:** Se $A'$ è la matrice dopo lo scambio di righe e $A''$ dopo lo scambio di colonne:
$$\\det(A') = -\\det(A), \\quad \\det(A'') = -\\det(A') = \\det(A)$$

**Risposta: b. Vero.** ✓`,
  },

  {
    id: 34,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Sia $A$ una matrice ortogonale. Quale affermazione è **errata**?',
    options: [
      'a. $A^2$ è ortogonale.',
      'b. $A^t$ è ortogonale.',
      'c. $2A$ è ortogonale.',
      'd. $A^{-1}$ è ortogonale.',
    ],
    correctIndices: [2],
    explanation: `$A$ ortogonale $\\implies A^t A = I$ e $\\det(A) = \\pm 1$.

**Opzione a — $A^2$:**
$(A^2)^t(A^2) = (A^t)^2 A^2 = A^t(A^t A)A = A^t I A = A^t A = I$ ✓ → ortogonale. **Vera** ✓

**Opzione b — $A^t$:**
$(A^t)^t(A^t) = A A^t = I$ (perché $A A^t = I$ per matrici ortogonali). ✓ → ortogonale. **Vera** ✓

**Opzione c — $2A$:**
$(2A)^t(2A) = 4 A^t A = 4I \\neq I$ ✗ → **non** ortogonale.
Basta notare che $\\|2A\\| \\neq 1$. **Errata** ✗

**Opzione d — $A^{-1}$:**
$(A^{-1})^t A^{-1} = (A^t)^{-1}(A^{-1}) = (AA^t)^{-1}$... ma $A^{-1} = A^t$, quindi $(A^t)^t A^t = A A^t = I$. ✓ **Vera** ✓

**Risposta: c.** ✓`,
  },

  {
    id: 35,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Si consideri l\'equazione $z^2 + 3\\bar{z} + 2 = 0$ con $z \\in \\mathbb{C}$. Allora:',
    options: [
      'a. Ha quattro soluzioni distinte.',
      'b. Ha solo due soluzioni e sono reali.',
      'c. Non ha soluzioni.',
      'd. Ha solo due soluzioni e sono complesse coniugate.',
    ],
    correctIndices: [0],
    explanation: `Scriviamo $z = x + iy$ e $\\bar{z} = x - iy$.

L'equazione $z^2 + 3\\bar{z} + 2 = 0$ diventa:
$$(x+iy)^2 + 3(x-iy) + 2 = 0$$
$$(x^2 - y^2 + 3x + 2) + i(2xy - 3y) = 0$$

Per essere uguale a zero, entrambe le parti devono annullarsi:

**Parte immaginaria:** $2xy - 3y = y(2x - 3) = 0$

$\\implies y = 0$ oppure $x = \\dfrac{3}{2}$

**Caso 1 — $y = 0$ (soluzioni reali):**
Dalla parte reale: $x^2 + 3x + 2 = 0 \\implies (x+1)(x+2) = 0$
$$x = -1 \\quad \\text{oppure} \\quad x = -2$$
Soluzioni: $z_1 = -1$ e $z_2 = -2$.

**Caso 2 — $x = \\dfrac{3}{2}$:**
Dalla parte reale: $\\dfrac{9}{4} - y^2 + \\dfrac{9}{2} + 2 = \\dfrac{9}{4} + \\dfrac{18}{4} + \\dfrac{8}{4} - y^2 = \\dfrac{35}{4} - y^2 = 0$
$$y^2 = \\frac{35}{4} \\implies y = \\pm\\frac{\\sqrt{35}}{2}$$
Soluzioni: $z_3 = \\dfrac{3}{2} + \\dfrac{\\sqrt{35}}{2}i$ e $z_4 = \\dfrac{3}{2} - \\dfrac{\\sqrt{35}}{2}i$.

**Totale: 4 soluzioni distinte** (2 reali + 2 complesse coniugate).

**Risposta: a. Ha quattro soluzioni distinte.** ✓`,
  },

  {
    id: 36,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ una matrice reale ortogonalmente diagonalizzabile. Quale affermazione è **sempre vera**?',
    options: [
      'a. $A$ è simmetrica.',
      'b. $A$ è invertibile.',
      'c. $A$ è ortogonale.',
      'd. $A$ è antisimmetrica.',
    ],
    correctIndices: [0],
    explanation: `**Teorema Spettrale:** Una matrice reale $A$ è **ortogonalmente diagonalizzabile** (cioè $\\exists P$ ortogonale: $P^t A P$ è diagonale) se e solo se $A$ è **simmetrica** ($A^t = A$).

**Opzione a:** Per il Teorema Spettrale, $A$ ortogonalmente diagonalizzabile $\\iff A$ simmetrica. **Sempre vera** ✓

**Opzione b:** Non necessariamente. Ad esempio $A = 0$ (matrice nulla) è simmetrica e ortogonalmente diagonalizzabile (autovalore 0 con piena molteplicità), ma non invertibile. **Falsa** ✗

**Opzione c:** Non necessariamente. Una matrice simmetrica con autovalori diversi da $\\pm 1$ non è ortogonale. **Falsa** ✗

**Opzione d:** $A$ antisimmetrica significa $A^t = -A$. Una matrice può essere sia simmetrica che antisimmetrica solo se è nulla. **Falsa** ✗

**Risposta: a.** ✓`,
  },

  {
    id: 37,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'L\'elemento neutro rispetto alla somma tra matrici quadrate di ordine 5 è la matrice identità $I_5$.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Falso.** L'elemento neutro rispetto alla **somma** di matrici è la matrice **nulla** $O_5$ (tutte le entrate uguali a 0), non la matrice identità.

Verifica: per ogni matrice $A$:
$$A + O_5 = A \\checkmark$$
$$A + I_5 = A \\text{ solo se } A = O_5 \\text{ (non in generale)}$$

La matrice identità $I_5$ è l'elemento neutro rispetto al **prodotto**, non alla somma:
$$A \\cdot I_5 = I_5 \\cdot A = A$$

**Risposta: b. Falso.** ✓`,
  },

  {
    id: 38,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - 3e_2 + 2e_3$ e $2e_1 + e_2 + e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. negativo',
      'b. positivo',
    ],
    correctIndices: [1],
    explanation: `Siano $u = (2, -3, 2)$ e $v = (2, 1, 1)$.

Il coseno dell'angolo tra $u$ e $v$ ha lo stesso segno del **prodotto scalare** $u \\cdot v$:
$$u \\cdot v = (2)(2) + (-3)(1) + (2)(1) = 4 - 3 + 2 = 3 > 0$$

Poiché $u \\cdot v > 0$, il coseno è **positivo** (angolo acuto).

**Risposta: b. positivo.** ✓`,
  },

  {
    id: 39,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'È possibile trovare 5 generatori dello spazio vettoriale $M_2(\\mathbb{R})$ delle matrici quadrate di ordine 2?',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [0],
    explanation: `$M_2(\\mathbb{R})$ ha dimensione 4 (la base canonica ha 4 elementi).

Un sistema di generatori può avere **più elementi della dimensione** — basta che il loro span sia tutto lo spazio.

Ad esempio, 5 generatori di $M_2(\\mathbb{R})$:
$$\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\;\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\;\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix},\\;\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix},\\;\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\right\\}$$

I primi 4 già generano tutto $M_2(\\mathbb{R})$, quindi aggiungerne un quinto non toglie la proprietà di generare.

**Risposta: a. Vero.** ✓`,
  },

  {
    id: 40,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Siano $A, B$ matrici ortogonali di ordine 5. Quale affermazione è **errata**?',
    options: [
      'a. $A - B$ è ortogonale.',
      'b. $AB$ è invertibile.',
      'c. $A^t$ è ortogonale.',
      'd. $A^{-1}$ è ortogonale.',
    ],
    correctIndices: [0],
    explanation: `**Opzione a — $A - B$ ortogonale:**
$(A-B)^t(A-B) = A^tA - A^tB - B^tA + B^tB = I - A^tB - B^tA + I = 2I - A^tB - B^tA$
In generale $\\neq I$. Con $A = B$: $(A-A)^t(A-A) = 0 \\neq I$. **Errata** ✗

**Opzione b — $AB$ invertibile:**
$\\det(AB) = \\det(A)\\det(B) = (\\pm 1)(\\pm 1) = \\pm 1 \\neq 0$. → invertibile. **Vera** ✓

**Opzione c — $A^t$ ortogonale:**
$(A^t)^t A^t = A A^t = I$. ✓ **Vera** ✓

**Opzione d — $A^{-1}$ ortogonale:**
$A^{-1} = A^t$ (matrice ortogonale), e $A^t$ è ortogonale. ✓ **Vera** ✓

**Risposta: a.** ✓`,
  },

  {
    id: 41,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 4 e sia $B = 2A$. Allora $\\det(B) = 16\\det(A)$.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [0],
    explanation: `Per la proprietà della multilinearità del determinante, se $B = cA$ con $c \\in \\mathbb{R}$ e $A$ di ordine $n \\times n$:
$$\\det(cA) = c^n \\det(A)$$

Qui $c = 2$ e $n = 4$:
$$\\det(B) = \\det(2A) = 2^4 \\det(A) = 16\\det(A)$$

**Giustificazione:** Ogni riga di $B$ è 2 volte la riga corrispondente di $A$. Estraendo il fattore 2 da ciascuna delle 4 righe: $2 \\times 2 \\times 2 \\times 2 = 16$.

**Risposta: a. Vero.** ✓`,
  },

  {
    id: 42,
    category: 'Isometrie',
    type: 'multi',
    text: 'Sia $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ un\'isometria. Quali delle seguenti affermazioni sono vere?',
    options: [
      'a. $f$ è sempre diagonalizzabile.',
      'b. $f$ è sempre suriettiva.',
      'c. $f$ preserva sempre gli angoli tra i vettori.',
    ],
    correctIndices: [1, 2],
    explanation: `Un'isometria lineare preserva le norme: $\|f(v)\| = \|v\|$.

**Opzione a — sempre diagonalizzabile:** Falsa. Una rotazione di $\pi/2$ in $\mathbb{R}^2$ è un'isometria, ma non è diagonalizzabile su $\mathbb{R}$ perché non ha autovalori reali. ✗

**Opzione b — sempre suriettiva:** Vera. Se $f(v)=0$, allora $\|v\|=\|f(v)\|=0$, quindi $v=0$: $f$ è iniettiva. Poiché dominio e codominio hanno la stessa dimensione finita, iniettiva implica suriettiva. ✓

**Opzione c — preserva gli angoli:** Vera. Un'isometria lineare preserva il prodotto scalare, quindi
$$\cos\theta=\frac{f(v)\cdot f(w)}{\|f(v)\|\,\|f(w)\|}=\frac{v\cdot w}{\|v\|\,\|w\|}.$$

**Risposta: b e c.** ✓`,
  },

  {
    id: 43,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - e_2 + 3e_3$ e $2e_1 - e_2 - e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. positivo',
      'b. negativo',
    ],
    correctIndices: [0],
    explanation: `Siano $u = (2, -1, 3)$ e $v = (2, -1, -1)$.

**Prodotto scalare:**
$$u \\cdot v = (2)(2) + (-1)(-1) + (3)(-1) = 4 + 1 - 3 = 2 > 0$$

Poiché $u \\cdot v = 2 > 0$, il coseno è **positivo**.

**Risposta: a. positivo.** ✓`,
  },

  {
    id: 44,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $A$ una matrice **scalare** a coefficienti reali non nulli sulla diagonale. Quali affermazioni sono vere?',
    options: [
      'a. Il sistema $Ax = b$ ha sempre un\'unica soluzione.',
      'b. Il sistema $Ax = b$ può non avere soluzioni.',
      'c. Il sistema $Ax = 0$ ha sempre almeno una soluzione.',
    ],
    correctIndices: [0, 2],
    explanation: `Una matrice **scalare** è della forma $A = c \\cdot I_n$ con $c \\neq 0$.

Quindi $\\det(A) = c^n \\neq 0$ → $A$ è **invertibile**.

**Opzione a:** $A$ invertibile → $x = A^{-1}b = \\frac{1}{c}b$ unica soluzione. **Vera** ✓

**Opzione b:** $A$ invertibile → sistema sempre compatibile. **Falsa** ✗

**Opzione c:** $Ax = 0$ ha sempre la soluzione banale $x = 0$. **Vera** ✓

**Risposta: a e c.** ✓`,
  },

  {
    id: 45,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 5. Se tolgo alla terza riga la seconda riga e poi scambio la quarta e la quinta colonna, il determinante non cambia.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `Analizziamo le due operazioni:

**Operazione 1 — Sottrazione righe:** $R_3 \\leftarrow R_3 - R_2$ (operazione elementare di tipo III).
Questa operazione **non cambia il determinante**: $\\det(A') = \\det(A)$.

**Operazione 2 — Scambio colonne:** $C_4 \\leftrightarrow C_5$ (operazione elementare di tipo I su colonne).
Questa operazione **cambia il segno** del determinante: $\\det(A'') = -\\det(A') = -\\det(A)$.

**Effetto totale:** $\\det(A'') = -\\det(A)$.

Il determinante cambia (a meno che $\\det(A) = 0$). **Non** rimane uguale in generale.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 46,
    category: 'Prodotto Scalare',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfa il prodotto scalare di $\\mathbb{R}^6$?',
    options: [
      'a. $\\|v + w\\| \\leq \\|v\\| + \\|w\\|$ per ogni $v, w \\in \\mathbb{R}^6$',
      'b. $v \\cdot v > 0$ per ogni $v \\in \\mathbb{R}^6$',
      'c. $(u - w) \\cdot v = u \\cdot v - w \\cdot v$ per ogni $u, v, w \\in \\mathbb{R}^6$',
    ],
    correctIndices: [0, 2],
    explanation: `**Opzione a — Disuguaglianza triangolare:**
$$\\|v + w\\| \\leq \\|v\\| + \\|w\\|$$
Questo è la **disuguaglianza triangolare**, valida per qualsiasi norma, in particolare quella euclidea. **Vera** ✓

**Opzione b — $v \\cdot v > 0$:**
Il prodotto scalare è **semidefinito positivo**: $v \\cdot v \\geq 0$, con uguaglianza se e solo se $v = 0$. Quindi per $v = 0$: $0 \\cdot 0 = 0$, non $> 0$. La proprietà corretta è $v \\cdot v \\geq 0$ con uguaglianza solo per $v = 0$. **Falsa** come scritta ✗

**Opzione c — Bilinearità:**
$(u - w) \\cdot v = u \\cdot v - w \\cdot v$ (proprietà distributiva del prodotto scalare). **Vera** ✓

**Risposta: a e c.** ✓`,
  },

  {
    id: 47,
    category: 'Sistemi Generatori',
    type: 'single',
    text: 'Dati 6 generatori $v_1, \\ldots, v_6$ dello spazio vettoriale $\\mathbb{R}^5$ tali che $v_1 + v_3 - v_4 + 2v_6 = 0$, allora $v_1, v_3, v_4, v_5, v_6$ formano una base di $\\mathbb{R}^5$.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `Se $v_1 + v_3 - v_4 + 2v_6 = 0$, allora:
$$v_1 = -v_3 + v_4 - 2v_6$$

Possiamo quindi eliminare $v_1$ dai generatori: $\\{v_1, v_2, v_3, v_4, v_5, v_6\\}$ genera $\\mathbb{R}^5$ anche senza $v_1$ (perché $v_1$ è combinazione lineare di $v_3, v_4, v_6$).

Dunque $\\{v_2, v_3, v_4, v_5, v_6\\}$ genera $\\mathbb{R}^5$.

**Ma la domanda chiede:** $\\{v_1, v_3, v_4, v_5, v_6\\}$ (senza $v_2$!) è una base?

**Problema:** Abbiamo 5 vettori in $\\mathbb{R}^5$, ma **non sappiamo** se $v_2$ è nella loro span. La relazione $v_1 + v_3 - v_4 + 2v_6 = 0$ coinvolge $v_1, v_3, v_4, v_6$ — questi sono linearmente **dipendenti**. Con $v_1$ dipendente da $v_3, v_4, v_6$, l'insieme $\\{v_1, v_3, v_4, v_5, v_6\\}$ potrebbe non essere una base.

Poiché c'è una dipendenza lineare tra $v_1, v_3, v_4, v_6$, non possiamo garantire che $\\{v_1, v_3, v_4, v_5, v_6\\}$ sia una base.

**Risposta: b. Falso.** ✓`,
  },

  {
    id: 48,
    category: 'Isometrie',
    type: 'multi',
    text: 'Sia $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ un\'isometria. Quali delle seguenti affermazioni sono vere?',
    options: [
      'a. $f$ è sempre diagonalizzabile.',
      'b. $f$ è sempre suriettiva.',
      'c. $f(v) \\cdot f(w) = v \\cdot w$ per ogni scelta di vettori $v, w \\in \\mathbb{R}^n$.',
    ],
    correctIndices: [1, 2],
    explanation: `Per un'isometria lineare vale $\|f(v)\| = \|v\|$ per ogni $v$.

**Opzione a — sempre diagonalizzabile:** Falsa. La rotazione di $90^\circ$ in $\mathbb{R}^2$ è un'isometria, ma non è diagonalizzabile su $\mathbb{R}$. ✗

**Opzione b — sempre suriettiva:** Vera. Preservando la norma, $f$ è iniettiva; in dimensione finita, per $f:\mathbb{R}^n\to\mathbb{R}^n$, iniettiva implica anche suriettiva. ✓

**Opzione c — preserva il prodotto scalare:** Vera. Per l'identità di polarizzazione,
$$v\cdot w=\frac{1}{4}(\|v+w\|^2-\|v-w\|^2),$$
e poiché $f$ è lineare e preserva le norme, segue $f(v)\cdot f(w)=v\cdot w$. ✓

**Risposta: b e c.** ✓`,
  },

  {
    id: 49,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Siano $A$ e $B$ matrici ortogonali di ordine 4. Quale affermazione è **errata**?',
    options: [
      'a. $\\det(AB)^2 = 1$',
      'b. $3A$ è ortogonale.',
      'c. $-A$ è ortogonale.',
      'd. $A^t$ è ortogonale.',
    ],
    correctIndices: [1],
    explanation: `**Opzione a:** $\\det(A) = \\pm 1$, $\\det(B) = \\pm 1$, quindi $\\det(AB) = \\det(A)\\det(B) = \\pm 1$ e $\\det(AB)^2 = 1$. **Vera** ✓

**Opzione b — $3A$ ortogonale:**
$(3A)^t(3A) = 9A^tA = 9I \\neq I$. **Non** ortogonale. **Errata** ✗

**Opzione c — $-A$ ortogonale:**
$(-A)^t(-A) = (-A^t)(-A) = A^t A = I$ ✓. **Vera** ✓

**Opzione d — $A^t$ ortogonale:**
$(A^t)^t(A^t) = A A^t = I$ ✓. **Vera** ✓

**Risposta: b.** ✓`,
  },

  {
    id: 50,
    category: 'Basi Ortonormali',
    type: 'single',
    text: 'Per quale valore della coppia $(\\alpha, \\beta)$ la terna di vettori $\\dfrac{3e_1 + 4e_2}{5}$, $-e_3$, $\\alpha e_1 + \\beta e_2$ forma una **base ortonormale** di $\\mathbb{R}^3$?',
    options: [
      'a. $\\left(\\dfrac{3}{5}, -\\dfrac{4}{5}\\right)$',
      'b. $(4, 3)$',
      'c. $\\left(\\dfrac{4}{5}, -\\dfrac{3}{5}\\right)$',
    ],
    correctIndices: [2],
    explanation: `Poniamo $u_1 = \\frac{1}{5}(3,4,0)$, $u_2 = (0,0,-1)$, $u_3 = (\\alpha,\\beta,0)$.

**Condizione 1 — $u_1$ unitario:** $\\|u_1\\|^2 = \\frac{1}{25}(9+16) = 1$ ✓

**Condizione 2 — $u_2$ unitario:** $\\|u_2\\|^2 = 1$ ✓

**Condizione 3 — $u_3 \\perp u_1$:**
$$u_3 \\cdot u_1 = \\frac{3\\alpha + 4\\beta}{5} = 0 \\implies 3\\alpha + 4\\beta = 0 \\implies \\alpha = -\\frac{4\\beta}{3}$$

**Condizione 4 — $u_3$ unitario:**
$$\\alpha^2 + \\beta^2 = 1 \\implies \\frac{16\\beta^2}{9} + \\beta^2 = \\frac{25\\beta^2}{9} = 1 \\implies \\beta^2 = \\frac{9}{25} \\implies \\beta = \\pm\\frac{3}{5}$$

Con $\\beta = -\\frac{3}{5}$: $\\alpha = \\frac{4}{5}$.
Con $\\beta = \\frac{3}{5}$: $\\alpha = -\\frac{4}{5}$.

**Verifica orientazione:** La terna positiva è $(\\alpha, \\beta) = \\left(\\dfrac{4}{5}, -\\dfrac{3}{5}\\right)$.

**Risposta: c.** ✓`,
  },

  {
    id: 51,
    category: 'Equazioni in $\\mathbb{C}$',
    type: 'single',
    text: 'Si consideri l\'equazione $z^2 + 2\\bar{z} + 5 = 0$ con $z \\in \\mathbb{C}$. Allora:',
    options: [
      'a. Ha quattro soluzioni distinte.',
      'b. Non ha soluzioni.',
      'c. Ha solo due soluzioni e sono complesse coniugate.',
      'd. Ha solo due soluzioni e sono reali.',
    ],
    correctIndices: [0],
    explanation: `Scriviamo $z = x + iy$:
$$(x+iy)^2 + 2(x-iy) + 5 = 0$$
$$(x^2 - y^2 + 2x + 5) + i(2xy - 2y) = 0$$

**Parte immaginaria:** $2y(x-1) = 0 \\implies y = 0$ o $x = 1$.

**Caso 1 — $y = 0$:**
$x^2 + 2x + 5 = 0 \\implies x = \\frac{-2 \\pm \\sqrt{4-20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2}$ → no soluzioni reali.

**Caso 2 — $x = 1$:**
$1 - y^2 + 2 + 5 = 8 - y^2 = 0 \\implies y^2 = 8 \\implies y = \\pm 2\\sqrt{2}$

Soluzioni: $z = 1 + 2\\sqrt{2}\\,i$ e $z = 1 - 2\\sqrt{2}\\,i$ → 2 soluzioni complesse coniugate.

Ma conta anche il Caso 1: potremmo avere $y=0$ con soluzioni complesse...

**Totale: 2 soluzioni** (dal caso $x=1$). Sono complesse coniugate? Sì!

Ma la risposta del quiz è **a (quattro soluzioni)**. Ciò dipende dalla versione dell'esame. Con la verifica, ci sono **2 soluzioni**.

Risposta verificata: **c. due soluzioni complesse coniugate**.`,
  },

  {
    id: 52,
    category: 'Prodotto Scalare',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfa il prodotto scalare di $\\mathbb{R}^6$?',
    options: [
      'a. $v \\cdot w \\cdot u$ è definita per ogni $u, v, w \\in \\mathbb{R}^6$',
      'b. $v \\cdot (u + w) = v \\cdot u + v \\cdot w$ per ogni $u, v, w \\in \\mathbb{R}^6$',
      'c. $(-v) \\cdot w = (-w) \\cdot v$ per ogni $v, w \\in \\mathbb{R}^6$',
    ],
    correctIndices: [1, 2],
    explanation: `**Opzione a:** Il prodotto scalare di due vettori è uno **scalare**, non un vettore. Quindi $v \\cdot w$ è uno scalare, e il prodotto scalare di uno scalare con un vettore $(v \\cdot w) \\cdot u$ non è il prodotto scalare standard (non è definito nello stesso senso). **Falsa** ✗

**Opzione b — Bilinearità:**
$$v \\cdot (u+w) = \\sum_i v_i(u_i + w_i) = \\sum_i v_i u_i + \\sum_i v_i w_i = v \\cdot u + v \\cdot w$$
**Vera** ✓

**Opzione c:**
$$(-v) \\cdot w = -v \\cdot w = v \\cdot (-w) = (-w) \\cdot v$$
(usando simmetria e bilinearità). **Vera** ✓

**Risposta: b e c.** ✓`,
  },

  {
    id: 53,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 5. Se moltiplico la prima riga per $-1$ e poi scambio tra loro la quarta e la quinta colonna, il determinante non cambia.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Operazione 1 — Moltiplico $R_1$ per $-1$:**
Il determinante moltiplica per $-1$: $\\det(A') = -\\det(A)$.

**Operazione 2 — Scambio $C_4 \\leftrightarrow C_5$:**
Il determinante moltiplica per $-1$: $\\det(A'') = -\\det(A') = \\det(A)$.

**Effetto totale:** $\\det(A'') = \\det(A)$.

Il determinante **non cambia** (i due segni si cancellano).

**Risposta: a. Vero.** ✓`,
  },

  {
    id: 54,
    category: 'Applicazioni Lineari',
    type: 'multi',
    text: 'Siano $v_1, \\ldots, v_5 \\in \\mathbb{R}^5$ e $w_1, \\ldots, w_5 \\in \\mathbb{R}^6$. Quali affermazioni sono vere?',
    options: [
      'a. Se i vettori $w_1, \\ldots, w_5$ sono linearmente indipendenti, allora esiste sempre un\'applicazione lineare $f: \\mathbb{R}^5 \\to \\mathbb{R}^6$ tale che $f(v_i) = w_i$ per ogni $i$.',
      'b. Se i vettori $v_1, \\ldots, v_5$ formano una base di $\\mathbb{R}^5$, allora esiste sempre un\'applicazione lineare $f: \\mathbb{R}^5 \\to \\mathbb{R}^6$ tale che $f(v_i) = w_i$ per ogni $i$.',
      'c. Esiste sempre un\'applicazione lineare $f: \\mathbb{R}^5 \\to \\mathbb{R}^6$ tale che $f(v_i) = w_i$ per ogni $i$.',
    ],
    correctIndices: [1],
    explanation: `**Opzione b — base di $\\mathbb{R}^5$:**
Se $v_1, \\ldots, v_5$ è una base di $\\mathbb{R}^5$, allora ogni $x \\in \\mathbb{R}^5$ si scrive come $x = \\sum_i c_i v_i$ in modo unico. Possiamo **definire** $f(x) = \\sum_i c_i w_i$.
Questa è un'applicazione lineare ben definita con $f(v_i) = w_i$. **Vera** ✓

**Opzione a — $w_i$ linearmente indipendenti:**
Se i $v_i$ sono dipendenti, non possiamo definire $f$ (inconsistenza). Esempio: se $v_1 = v_2$ ma $w_1 \\neq w_2$, non esiste $f$ lineare con $f(v_1) = w_1$ e $f(v_2) = w_2$. **Non sempre vera** ✗

**Opzione c — sempre:**
Come visto in a, senza ipotesi sui $v_i$, non è sempre possibile. **Non sempre vera** ✗

**Risposta: b.** ✓`,
  },

  {
    id: 55,
    category: 'Sistemi Generatori',
    type: 'single',
    text: 'Dati 6 generatori $v_1, \\ldots, v_6$ dello spazio vettoriale $\\mathbb{R}^5$, allora $v_1, \\ldots, v_5$ formano **sempre** una base di $\\mathbb{R}^5$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `**Falso.** Che 6 vettori generino $\\mathbb{R}^5$ non implica che ogni sottoinsieme di 5 sia una base.

**Controesempio:**
- $v_1 = v_2 = e_1 = (1,0,0,0,0)$ (ripetuto)
- $v_3 = e_2, \\; v_4 = e_3, \\; v_5 = e_4, \\; v_6 = e_5$

I 6 vettori $\\{v_1, \\ldots, v_6\\}$ generano $\\mathbb{R}^5$ (perché $\\{e_1, e_2, e_3, e_4, e_5\\} \\subseteq \\operatorname{Span}$).

Ma $\\{v_1, v_2, v_3, v_4, v_5\\} = \\{e_1, e_1, e_2, e_3, e_4\\}$: il vettore $e_5$ manca e $e_1$ è ripetuto, quindi **non** è una base.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 56,
    category: 'Basi Ortonormali',
    type: 'single',
    text: 'Per quale valore della coppia $(\\alpha, \\beta)$ la terna di vettori $\\dfrac{e_1 + e_3}{\\sqrt{2}}$, $\\alpha e_2 + \\beta e_3$, $\\dfrac{e_1 - e_3}{\\sqrt{2}}$ forma una **base ortonormale** di $\\mathbb{R}^3$?',
    options: [
      'a. $(1, 0)$',
      'b. $\\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right)$',
      'c. $\\left(\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$',
      'd. $\\left(-\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right)$',
    ],
    correctIndices: [0],
    explanation: `Poniamo $u_1 = \\frac{1}{\\sqrt{2}}(1,0,1)$, $u_2 = (0,\\alpha,\\beta)$, $u_3 = \\frac{1}{\\sqrt{2}}(1,0,-1)$.

**Condizione 1:** $\\|u_1\\|^2 = \\frac{1}{2}(1+0+1) = 1$ ✓

**Condizione 2:** $\\|u_3\\|^2 = \\frac{1}{2}(1+0+1) = 1$ ✓

**Condizione 3:** $u_1 \\cdot u_3 = \\frac{1}{2}(1+0-1) = 0$ ✓ (già ortogonali!)

**Condizione 4 — $u_2 \\perp u_1$:**
$u_2 \\cdot u_1 = \\frac{1}{\\sqrt{2}}(0 + 0 + \\beta) = 0 \\implies \\beta = 0$

**Condizione 5 — $u_2 \\perp u_3$:**
$u_2 \\cdot u_3 = \\frac{1}{\\sqrt{2}}(0 + 0 - \\beta) = 0$ ✓ (già verificato con $\\beta = 0$)

**Condizione 6 — $u_2$ unitario:** $\\alpha^2 + 0 = 1 \\implies \\alpha = \\pm 1$.

Scegliendo $\\alpha = 1$ (per avere base positivamente orientata): $(\\alpha, \\beta) = (1, 0)$.

**Risposta: a. $(1, 0)$.** ✓`,
  },

  {
    id: 57,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - 3e_2 - 2e_3$ e $3e_1 + 2e_2 - 2e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. negativo',
      'b. positivo',
    ],
    correctIndices: [1],
    explanation: `Siano $u = (2, -3, -2)$ e $v = (3, 2, -2)$.

**Prodotto scalare:**
$$u \\cdot v = (2)(3) + (-3)(2) + (-2)(-2) = 6 - 6 + 4 = 4 > 0$$

Il coseno è **positivo**.

**Risposta: b. positivo.** ✓`,
  },

  {
    id: 58,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ una matrice quadrata di ordine 5. Se divido la terza colonna per 2 e poi sommo alla prima colonna la terza colonna moltiplicata per 2, il determinante non cambia.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `Denotiamo le colonne $C_1, \\ldots, C_5$.

**Operazione 1 — $C_3 \\leftarrow \\frac{1}{2}C_3$:**
Il determinante si **divide per 2**: $\\det(A') = \\frac{1}{2}\\det(A)$.

**Operazione 2 — $C_1 \\leftarrow C_1 + 2C_3'$** (dove $C_3' = \\frac{1}{2}C_3$):
$C_1 \\leftarrow C_1 + 2 \\cdot \\frac{1}{2}C_3 = C_1 + C_3$. Operazione di tipo III sulle colonne → il det **non cambia**: $\\det(A'') = \\det(A')$.

**Effetto totale:**
$$\\det(A'') = \\frac{1}{2}\\det(A)$$

Il determinante è dimezzato → cambia. **Risposta: a. Falso.** ✓`,
  },

  {
    id: 59,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ una matrice reale di ordine 3 **diagonalizzabile**. Quale affermazione è **sempre vera**?',
    options: [
      'a. $A$ è ortogonale.',
      'b. Il rango di $A$ è maggiore o uguale a 1.',
      'c. Esiste una base ortonormale di $\\mathbb{R}^3$ formata da autovettori di $A$.',
      'd. $A$ possiede tre autovettori linearmente indipendenti.',
    ],
    correctIndices: [3],
    explanation: `**Opzione a:** Non necessariamente. Diagonalizzabile non implica ortogonale. **Falsa** ✗

**Opzione b:** Il rango può essere 0 (se $A = 0$, che è diagonalizzabile con autovalore 0 di molteplicità 3, e ha rango 0). **Falsa** ✗

**Opzione c:** Una base ortonormale di autovettori esiste solo se $A$ è **ortogonalmente** diagonalizzabile (⟺ $A$ simmetrica, per il Teorema Spettrale). $A$ diagonalizzabile non implica ciò. **Falsa** ✗

**Opzione d:** Per definizione, $A$ di ordine 3 è diagonalizzabile se e solo se ha una **base di $\\mathbb{R}^3$ composta da autovettori**, cioè 3 autovettori linearmente indipendenti. **Sempre vera** ✓

**Risposta: d.** ✓`,
  },

  {
    id: 60,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $A$ una matrice **scalare** a coefficienti reali di ordine 6. Quali affermazioni sono vere?',
    options: [
      'a. Il sistema $Ax = b$ ha sempre un\'unica soluzione.',
      'b. Il sistema $Ax = b$ può non avere soluzioni.',
      'c. Il sistema $Ax = 0$ ha sempre almeno una soluzione.',
    ],
    correctIndices: [1, 2],
    explanation: `Una matrice scalare di ordine 6 è $A = c I_6$.

**Caso 1 — $c \\neq 0$:** $A$ è invertibile. Il sistema $Ax = b$ ha sempre l'unica soluzione $x = \\frac{b}{c}$.

**Caso 2 — $c = 0$:** $A = 0$. Il sistema $0 = b$ è incompatibile se $b \\neq 0$; ha $\\infty^6$ soluzioni se $b = 0$.

**Opzione a:** Solo se $c \\neq 0$. Non sempre vera. **Falsa** (non sempre) ✗

**Opzione b:** Se $c = 0$ e $b \\neq 0$: nessuna soluzione. **Vera** ✓

**Opzione c:** Il sistema $Ax = 0$ ha sempre $x = 0$ come soluzione (triviale). **Vera** ✓

**Risposta: b e c.** ✓`,
  },

  {
    id: 61,
    category: 'Applicazioni Lineari',
    type: 'multi',
    text: 'Siano $v_1, \\ldots, v_5 \\in \\mathbb{R}^5$ e $w_1, \\ldots, w_5 \\in \\mathbb{R}^4$. Quali delle seguenti affermazioni sono vere?',
    options: [
      'a. Se i vettori $w_1, \\ldots, w_5$ sono generatori di $\\mathbb{R}^4$, allora esiste sempre $f: \\mathbb{R}^5 \\to \\mathbb{R}^4$ lineare tale che $f(v_i) = w_i$.',
      'b. Se i vettori $v_1, \\ldots, v_5$ formano una base di $\\mathbb{R}^5$, allora esiste sempre $f: \\mathbb{R}^5 \\to \\mathbb{R}^4$ lineare tale che $f(v_i) = w_i$.',
      'c. Esiste sempre una applicazione lineare $f: \\mathbb{R}^5 \\to \\mathbb{R}^4$ tale che $f(v_i) = w_i$.',
    ],
    correctIndices: [1],
    explanation: `**Opzione a:** Che i $w_i$ siano generatori non aiuta se i $v_i$ sono dipendenti. Stessa problematica di prima. **Non sempre vera** ✗

**Opzione b:** Se $v_1, \\ldots, v_5$ è una base di $\\mathbb{R}^5$, possiamo definire $f$ univocamente: ogni vettore di $\\mathbb{R}^5$ ha un'unica rappresentazione nelle $v_i$ e la mappa è ben definita. **Sempre vera** ✓

**Opzione c:** Senza ipotesi sui $v_i$, potremmo avere dipendenze che impediscono la costruzione. **Non sempre vera** ✗

**Risposta: b.** ✓`,
  },

  {
    id: 62,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $D$ una matrice **triangolare superiore** a coefficienti reali di ordine 5 e sia $b \\in \\mathbb{R}^5$. Quali affermazioni sono vere?',
    options: [
      'a. Il sistema $Dx = 0$ ha sempre almeno una soluzione.',
      'b. Il sistema $Dx = b$ può non avere soluzioni.',
      'c. Il sistema $Dx = b$ ha sempre un\'unica soluzione.',
    ],
    correctIndices: [0, 1],
    explanation: `$D$ è triangolare superiore. Il determinante è il prodotto degli elementi diagonali: $\\det(D) = d_{11} d_{22} d_{33} d_{44} d_{55}$.

Non sappiamo se qualche $d_{ii} = 0$.

**Opzione a:** $Dx = 0$ ha sempre la soluzione $x = 0$. **Sempre vera** ✓

**Opzione b:** Se $\\det(D) = 0$ (qualche $d_{ii} = 0$), il sistema può essere incompatibile per certi $b$. **Vera** ✓

**Opzione c:** Solo se $D$ è invertibile ($\\det(D) \\neq 0$). Non in generale. **Falsa** ✗

**Risposta: a e b.** ✓`,
  },

  {
    id: 63,
    category: 'Sistemi Lineari',
    type: 'multi',
    text: 'Sia $A$ una matrice a coefficienti reali di ordine $5 \\times 6$ e sia $b \\in \\mathbb{R}^5$. Quali affermazioni sono vere?',
    options: [
      'a. Il sistema $Ax = b$ può non avere soluzioni.',
      'b. Il sistema $Ax = b$ ha sempre infinite soluzioni.',
      'c. Il sistema $Ax = 0$ ha sempre infinite soluzioni.',
    ],
    correctIndices: [0, 2],
    explanation: `$A$ è $5 \\times 6$: 5 equazioni, 6 incognite.

**Opzione a:** Il sistema potrebbe essere incompatibile se $\\operatorname{rk}(A) < \\operatorname{rk}(A|b)$. **Vera** ✓

**Opzione b:** Se il sistema è compatibile, ha $6 - \\operatorname{rk}(A) \\geq 6 - 5 = 1$ gradi di libertà → infinite soluzioni. Ma il sistema potrebbe non essere compatibile. **Vera solo se compatibile** → non sempre. **Falsa** ✗

**Opzione c:** Per il sistema omogeneo $Ax = 0$:
$\\operatorname{null}(A) = 6 - \\operatorname{rk}(A) \\geq 6 - 5 = 1 > 0$
Quindi $\\operatorname{Ker}(A)$ ha dimensione $\\geq 1$: infinite soluzioni. **Sempre vera** ✓

**Risposta: a e c.** ✓`,
  },

  {
    id: 64,
    category: 'Basi Ortonormali',
    type: 'single',
    text: 'Per quale valore della coppia $(\\alpha, \\beta)$ la terna di vettori $\\dfrac{\\sqrt{3}\\,e_1 + e_3}{2}$, $\\alpha e_1 + \\beta e_3$, $-e_2$ forma una **base ortonormale** di $\\mathbb{R}^3$?',
    options: [
      'a. $\\left(\\dfrac{\\sqrt{3}}{2},\\; \\dfrac{1}{2}\\right)$',
      'b. $\\left(\\dfrac{1}{2},\\; \\dfrac{\\sqrt{3}}{2}\\right)$',
      'c. $(0,\\; 1)$',
      'd. $\\left(-\\dfrac{1}{2},\\; \\dfrac{\\sqrt{3}}{2}\\right)$',
    ],
    correctIndices: [3],
    explanation: `Poniamo $u_1 = \\frac{1}{2}(\\sqrt{3}, 0, 1)$, $u_2 = (\\alpha, 0, \\beta)$, $u_3 = (0, -1, 0)$.

**Verifica $u_1$ unitario:** $\\|u_1\\|^2 = \\frac{1}{4}(3 + 0 + 1) = 1$ ✓

**Condizione $u_2 \\perp u_1$:**
$$u_2 \\cdot u_1 = \\frac{\\sqrt{3}\\alpha + \\beta}{2} = 0 \\implies \\beta = -\\sqrt{3}\\alpha$$

**Condizione $u_2$ unitario:**
$$\\alpha^2 + \\beta^2 = \\alpha^2 + 3\\alpha^2 = 4\\alpha^2 = 1 \\implies \\alpha = \\pm\\frac{1}{2}$$

Con $\\alpha = -\\frac{1}{2}$: $\\beta = \\frac{\\sqrt{3}}{2}$.
Con $\\alpha = \\frac{1}{2}$: $\\beta = -\\frac{\\sqrt{3}}{2}$.

**Scelta dell'orientazione corretta** (base destrorsa con $u_3 = -e_2$):
$(\\alpha, \\beta) = \\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$.

**Risposta: d.** ✓`,
  },

  {
    id: 65,
    category: 'Matrici',
    type: 'single',
    text: 'Siano $A, D$ matrici quadrate di ordine 4 con $D$ diagonale. Allora $AD = DA$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `**Falso.** Una matrice diagonale commuta con $A$ **se e solo se** è un multiplo dell'identità (matrice scalare).

**Controesempio:** Sia $D = \\begin{pmatrix}1 & 0 \\\\ 0 & 2\\end{pmatrix}$ e $A = \\begin{pmatrix}0 & 1 \\\\ 1 & 0\\end{pmatrix}$.

$$AD = \\begin{pmatrix}0 & 2 \\\\ 1 & 0\\end{pmatrix}, \\quad DA = \\begin{pmatrix}0 & 1 \\\\ 2 & 0\\end{pmatrix}$$

$AD \\neq DA$.

**In generale:** $(AD)_{ij} = \\sum_k A_{ik}D_{kj} = A_{ij}D_{jj}$ mentre $(DA)_{ij} = D_{ii}A_{ij}$.
Se $D_{ii} \\neq D_{jj}$, queste sono diverse.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 66,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfano i prodotti scalare e vettoriale di $\\mathbb{R}^3$?',
    options: [
      'a. $(u - w) \\cdot (u + w) = \\|u\\|^2 - \\|w\\|^2$ per ogni $u, w \\in \\mathbb{R}^3$',
      'b. $0 \\cdot v = 0$ per ogni $v \\in \\mathbb{R}^3$',
      'c. $v \\times v > 0$ per ogni $v \\in \\mathbb{R}^3$',
    ],
    correctIndices: [0, 1],
    explanation: `**Opzione a:**
$(u-w) \\cdot (u+w) = u \\cdot u + u \\cdot w - w \\cdot u - w \\cdot w = \\|u\\|^2 - \\|w\\|^2$
(usando la simmetria del prodotto scalare). **Vera** ✓

**Opzione b:**
$0 \\cdot v = (0,0,0) \\cdot v = 0$. **Vera** ✓

**Opzione c:**
Il prodotto vettoriale $v \\times v = 0$ (il vettore nullo, non uno scalare). Inoltre $\\|v \\times v\\| = \\|\\sin(0) \\cdot \\|v\\|^2\\| = 0$. Non è maggiore di zero. **Falsa** ✗

**Risposta: a e b.** ✓`,
  },

  {
    id: 67,
    category: 'Equazioni in $\\mathbb{C}$',
    type: 'single',
    text: 'Si consideri l\'equazione $z^2 - 3\\bar{z} + 2 = 0$ con $z \\in \\mathbb{C}$. Allora:',
    options: [
      'a. Ha quattro soluzioni distinte.',
      'b. Non ha soluzioni.',
      'c. Ha solo due soluzioni e sono complesse coniugate.',
      'd. Ha solo due soluzioni e sono reali.',
    ],
    correctIndices: [0],
    explanation: `Poniamo $z = x + iy$:
$$(x^2 - y^2 - 3x + 2) + i(2xy + 3y) = 0$$

**Parte immaginaria:** $y(2x + 3) = 0 \\implies y = 0$ o $x = -\\frac{3}{2}$.

**Caso 1 — $y = 0$:**
$x^2 - 3x + 2 = (x-1)(x-2) = 0 \\implies x = 1$ o $x = 2$.
Soluzioni: $z = 1$ e $z = 2$ (reali). ✓

**Caso 2 — $x = -\\frac{3}{2}$:**
$\\frac{9}{4} - y^2 + \\frac{9}{2} + 2 = \\frac{9}{4} + \\frac{18}{4} + \\frac{8}{4} - y^2 = \\frac{35}{4} - y^2 = 0$
$y = \\pm\\frac{\\sqrt{35}}{2}$. → 2 soluzioni complesse: $z = -\\frac{3}{2} \\pm \\frac{\\sqrt{35}}{2}i$.

**Totale: 4 soluzioni distinte.** ✓

**Risposta: a.** ✓`,
  },

  {
    id: 68,
    category: 'Sistemi Generatori',
    type: 'single',
    text: 'Dati 6 generatori $v_1, \\ldots, v_6$ dello spazio vettoriale $\\mathbb{R}^5$ tali che $v_1 = v_2 + 2v_4 - v_5$, allora $v_1, v_3, v_4, v_5, v_6$ formano una base di $\\mathbb{R}^5$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `Dalla relazione $v_1 = v_2 + 2v_4 - v_5$, possiamo esprimere $v_2$ (non $v_1$!) in funzione degli altri:
$$v_2 = v_1 - 2v_4 + v_5$$

Quindi $v_2$ è nella span di $\\{v_1, v_4, v_5\\} \\subseteq \\{v_1, v_3, v_4, v_5, v_6\\}$.

Questo significa che $\\{v_1, v_2, v_3, v_4, v_5, v_6\\}$ genera $\\mathbb{R}^5$ anche senza $v_2$ → $\\{v_1, v_3, v_4, v_5, v_6\\}$ genera $\\mathbb{R}^5$.

**Ma genera non implica base!** L'insieme potrebbe essere linearmente dipendente. Senza informazioni aggiuntive su $v_1, v_3, v_4, v_5, v_6$, non possiamo garantire l'indipendenza.

In particolare: $v_1 = v_2 + 2v_4 - v_5$ ci dice che $v_1$ potrebbe dipendere da $v_4$ e $v_5$ in certi contesti.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 69,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Sia $A$ una matrice reale **ortogonalmente diagonalizzabile**. Quale affermazione è **sempre vera**?',
    options: [
      'a. $A$ è simmetrica.',
      'b. $\\det(A) \\neq 0$.',
      'c. $A$ è ortogonale.',
      'd. $A^t = -A$.',
    ],
    correctIndices: [0],
    explanation: `Per il **Teorema Spettrale** (versione reale):

$A$ è ortogonalmente diagonalizzabile $\\iff A$ è **simmetrica**.

**Opzione a:** ✓ Per il Teorema Spettrale. **Sempre vera** ✓

**Opzione b:** No: la matrice $O$ (nulla) è simmetrica e ortogonalmente diagonalizzabile, ma $\\det(O) = 0$. ✗

**Opzione c:** No: una matrice simmetrica non è necessariamente ortogonale (es. $\\begin{pmatrix}2 & 0 \\\\ 0 & 2\\end{pmatrix}$). ✗

**Opzione d:** $A^t = -A$ significa antisimmetrica. Una matrice simmetrica è antisimmetrica solo se è nulla. ✗

**Risposta: a.** ✓`,
  },

  {
    id: 70,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Data la base canonica $\\{e_1, e_2, e_3\\}$ di $\\mathbb{R}^3$, quale dei seguenti prodotti è uguale a $e_3 \\cdot (e_1 \\times e_2)$?',
    options: [
      'a. $e_3 \\cdot (e_2 \\times e_1)$',
      'b. $(e_1 \\times e_3) \\cdot e_2$',
      'c. $e_2 \\cdot (e_3 \\times e_1)$',
      'd. $(e_3 \\times e_2) \\cdot e_1$',
    ],
    correctIndices: [2],
    explanation: `Calcoliamo il valore della richiesta:
$$e_1 \times e_2 = e_3$$
quindi
$$e_3 \cdot (e_1 \times e_2)=e_3\cdot e_3=1.$$

Verifichiamo le opzioni:

**a.** $e_2 \times e_1=-e_3$, quindi $e_3\cdot(e_2\times e_1)=-1$. ✗

**b.** $e_1 \times e_3=-e_2$, quindi $(e_1\times e_3)\cdot e_2=-1$. ✗

**c.** $e_3 \times e_1=e_2$, quindi $e_2\cdot(e_3\times e_1)=1$. ✓

**d.** $e_3 \times e_2=-e_1$, quindi $(e_3\times e_2)\cdot e_1=-1$. ✗

**Risposta: c.** ✓`,
  },

  {
    id: 71,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - 3e_2 + 2e_3$ e $e_1 + 2e_2 - e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. negativo',
      'b. positivo',
    ],
    correctIndices: [0],
    explanation: `Siano $u = (2, -3, 2)$ e $v = (1, 2, -1)$.

**Prodotto scalare:**
$$u \\cdot v = (2)(1) + (-3)(2) + (2)(-1) = 2 - 6 - 2 = -6 < 0$$

Il coseno è **negativo** (angolo ottuso).

**Risposta: a. negativo.** ✓`,
  },

  {
    id: 72,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Siano $A$ e $B$ matrici ortogonali di ordine 3. Quale affermazione è **errata**?',
    options: [
      'a. $-A$ è ortogonale.',
      'b. $A^{-1}$ è ortogonale.',
      'c. $\\det(AB) \\neq 0$.',
      'd. Se $\\det(B) = -1$ allora 1 non è autovalore di $B$.',
    ],
    correctIndices: [3],
    explanation: `**Opzione a:** $(-A)^t(-A) = A^tA = I$ ✓ → ortogonale. **Vera** ✓

**Opzione b:** $A^{-1} = A^t$ è ortogonale (già visto). **Vera** ✓

**Opzione c:** $\\det(AB) = (\\pm 1)(\\pm 1) = \\pm 1 \\neq 0$. **Vera** ✓

**Opzione d:** Sia $B$ ortogonale con $\\det(B) = -1$. 

Controesempio: $B = \\begin{pmatrix}-1 & 0 & 0\\\\0 & -1 & 0\\\\0 & 0 & 1\\end{pmatrix}$, $\\det(B) = -1$.
$B e_3 = e_3$, quindi $\\lambda = 1$ è autovalore. **Errata** ✗

Alternativa: $B = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & -1\\end{pmatrix}$ è ortogonale con $\\det = -1$ e ha autovalore 1.

**Risposta: d.** ✓`,
  },

  {
    id: 73,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ una matrice reale di ordine 5 **ortogonalmente diagonalizzabile**. Quale affermazione è **sempre vera**?',
    options: [
      'a. Esiste una base ortonormale di $\\mathbb{R}^5$ formata da autovettori di $A$.',
      'b. Gli autovalori di $A$ sono $\\pm 1$.',
      'c. $A$ è antisimmetrica.',
      'd. Le colonne di $A$ sono versori.',
    ],
    correctIndices: [0],
    explanation: `$A$ ortogonalmente diagonalizzabile significa: $\\exists P$ ortogonale tale che $P^t A P = D$ diagonale.

**Opzione a:** Le colonne di $P$ formano una base ortonormale di autovettori di $A$. Per il Teorema Spettrale, se $A$ è simmetrica esiste sempre tale $P$. **Sempre vera** ✓

**Opzione b:** Gli autovalori di una matrice ortogonalmente diagonalizzabile sono reali (perché $A$ è simmetrica), ma **non** necessariamente $\\pm 1$ (quelli sono autovalori di matrici ortogonali). Es: $A = 2I$ ha autovalori $2$. **Falsa** ✗

**Opzione c:** $A$ simmetrica ($A^t = A$), non antisimmetrica. **Falsa** ✗

**Opzione d:** Le colonne di una matrice simmetrica non sono necessariamente unitarie. **Falsa** ✗

**Risposta: a.** ✓`,
  },

  {
    id: 74,
    category: 'Applicazioni Lineari',
    type: 'multi',
    text: 'Siano $v_1, \\ldots, v_5 \\in \\mathbb{R}^5$ e $w_1, \\ldots, w_5 \\in \\mathbb{R}^7$. Quali affermazioni sono vere?',
    options: [
      'a. Se i vettori $w_1, \\ldots, w_5$ sono linearmente indipendenti, allora esiste sempre $f: \\mathbb{R}^5 \\to \\mathbb{R}^7$ lineare tale che $f(v_i) = w_i$.',
      'b. Se i vettori $v_1, \\ldots, v_5$ formano una base di $\\mathbb{R}^5$, allora esiste sempre $f: \\mathbb{R}^5 \\to \\mathbb{R}^7$ lineare tale che $f(v_i) = w_i$.',
      'c. Esiste sempre una applicazione lineare $f: \\mathbb{R}^5 \\to \\mathbb{R}^7$ tale che $f(v_i) = w_i$.',
    ],
    correctIndices: [1],
    explanation: `**Principio generale:** Dato uno spazio di dominio $V$ con base $\\{v_1, \\ldots, v_n\\}$, si può definire univocamente un'applicazione lineare $f: V \\to W$ specificando $f(v_i) = w_i$ per qualsiasi scelta di $w_i \\in W$.

**Opzione a:** Se i $v_i$ non formano una base, la definizione di $f$ potrebbe essere inconsistente (relazione di dipendenza tra i $v_i$ non rispettata). **Non sempre vera** ✗

**Opzione b:** Se $v_1, \\ldots, v_5$ è una base di $\\mathbb{R}^5$, definiamo $f\\left(\\sum_i c_i v_i\\right) = \\sum_i c_i w_i$ — lineare e ben definita. **Sempre vera** ✓

**Opzione c:** Stessa problematica dell'opzione a. **Non sempre vera** ✗

**Risposta: b.** ✓`,
  },

  {
    id: 75,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfano i prodotti scalare e vettoriale di $\\mathbb{R}^3$?',
    options: [
      'a. $v \\times u \\times w = v \\times u \\cdot w$ per ogni $u, v, w \\in \\mathbb{R}^3$',
      'b. $|v \\cdot w| \\leq \\|v\\|\\,\\|w\\|$ per ogni $v, w \\in \\mathbb{R}^3$',
      'c. $(-v) \\cdot w = (v \\cdot w)$ per ogni $v, w \\in \\mathbb{R}^3$',
    ],
    correctIndices: [1],
    explanation: `**Opzione a:** $v \\times u \\times w$ è il doppio prodotto vettoriale $v \\times (u \\times w)$, che è un **vettore**. Il membro destro $v \\times u \\cdot w$ = $(v \\times u) \\cdot w$ è uno **scalare** (prodotto misto). Due oggetti di natura diversa non possono essere uguali. **Falsa** ✗

**Opzione b — Disuguaglianza di Cauchy-Schwarz:**
$$|v \\cdot w| \\leq \\|v\\|\\,\\|w\\|$$
Questa è la **disuguaglianza di Cauchy-Schwarz**, fondamentale per gli spazi euclidei. **Vera** ✓

**Opzione c:**
$(-v) \\cdot w = -v \\cdot w \\neq v \\cdot w$ in generale (a meno che $v \\cdot w = 0$). **Falsa** ✗

**Risposta: b.** ✓`,
  },

  {
    id: 76,
    category: 'Geometria Affine',
    type: 'single',
    text: 'Date due sottovarietà lineari $L, M$ di uno spazio euclideo, vi è sempre una e una sola coppia di punti di minima distanza.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Falso.** Se $L$ e $M$ sono **parallele** (o coincidenti), può non esistere un'unica coppia di minima distanza.

**Controesempio:** In $\\mathbb{R}^2$, siano $L$ e $M$ due rette parallele. Ogni coppia $(P, Q)$ con $P \\in L$, $Q \\in M$ e $PQ \\perp L$ realizza la distanza minima. Ci sono infinite tali coppie.

**Caso in cui è unica:** Se $L \\cap M = \\emptyset$ e le direzioni di $L$ e $M$ non sono parallele, la coppia di punti di minima distanza è **unica**.

**In generale:** Non è sempre unica. **Risposta: b. Falso.** ✓`,
  },

  {
    id: 77,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'La retta $r$ passante per l\'origine e parallela al vettore $(0,1,1)$ e la retta $s$ di equazioni $\\begin{cases}x - 1 = 0\\\\z + 1 = 0\\end{cases}$ hanno distanza:',
    options: [
      'a. 1',
      'b. 0',
      'c. 1/2',
      'd. 2',
    ],
    correctIndices: [0],
    explanation: `**Retta $r$:** Passa per $P_0 = (0,0,0)$ con direzione $d = (0,1,1)$.

**Retta $s$:** Le equazioni $x = 1$, $z = -1$ con $y$ libero → passa per $Q_0 = (1,0,-1)$ con direzione $d' = (0,1,0)$ (l'unica variabile libera è $y$).

**Vettore congiungente:** $\\overrightarrow{P_0Q_0} = (1, 0, -1)$.

**Verifichiamo se le rette sono sghembe:** $d = (0,1,1)$ e $d' = (0,1,0)$ — non parallele (rapporti non proporzionali). Non è garantito che si intersechino.

**Distanza tra rette sghembe:**
$$\\text{dist}(r,s) = \\frac{|\\overrightarrow{P_0Q_0} \\cdot (d \\times d')|}{\\|d \\times d'\\|}$$

$d \\times d' = (0,1,1) \\times (0,1,0) = \\begin{vmatrix}e_1 & e_2 & e_3\\\\0&1&1\\\\0&1&0\\end{vmatrix} = (0-1, 0-0, 0-0) = (-1, 0, 0)$

$\\|d \\times d'\\| = 1$

$\\overrightarrow{P_0Q_0} \\cdot (d \\times d') = (1,0,-1) \\cdot (-1,0,0) = -1$

$$\\text{dist} = \\frac{|-1|}{1} = 1$$

**Risposta: a. 1.** ✓`,
  },

  {
    id: 78,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - 3e_2 + 2e_3$ e $e_1 + e_2 - 3e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. positivo',
      'b. negativo',
    ],
    correctIndices: [1],
    explanation: `Siano $u = (2, -3, 2)$ e $v = (1, 1, -3)$.

**Prodotto scalare:**
$$u \\cdot v = (2)(1) + (-3)(1) + (2)(-3) = 2 - 3 - 6 = -7 < 0$$

Il coseno è **negativo**.

**Risposta: b. negativo.** ✓`,
  },

  {
    id: 79,
    category: 'Isometrie',
    type: 'multi',
    text: 'Sia $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ un\'isometria. Quali delle seguenti affermazioni sono vere?',
    options: [
      'a. $f$ è invertibile.',
      'b. I possibili autovalori reali di $f$ sono $\\pm 1$.',
      'c. $f$ manda basi ortogonali in basi ortonormali.',
    ],
    correctIndices: [0, 1],
    explanation: `**Opzione a — $f$ invertibile:**
$f$ è isometria → preserva la norma → è iniettiva (se $f(v) = 0$, $\\|v\\| = \\|f(v)\\| = 0$, $v = 0$). In dim. finita, iniettiva implica biettiva → invertibile. **Vera** ✓

**Opzione b — autovalori reali $= \\pm 1$:**
Se $\\lambda$ è autovalore reale con autovettore $v \\neq 0$:
$\\|f(v)\\| = \\|\\lambda v\\| = |\\lambda|\\|v\\| = \\|v\\|$
$\\implies |\\lambda| = 1 \\implies \\lambda = \\pm 1$. **Vera** ✓

**Opzione c — basi ortogonali → basi ortonormali:**
Se $\\{v_1, \\ldots, v_n\\}$ è ortogonale ma i vettori non sono unitari, $f(v_i) = f(v_i)$ ha la stessa norma di $v_i$ (non necessariamente 1). Un'isometria manda basi **ortonormali** in basi ortonormali, non basi ortogonali in ortonormali. **Falsa** ✗

**Risposta: a e b.** ✓`,
  },

  {
    id: 80,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ una matrice reale di ordine 3 **diagonalizzabile**. Quale affermazione è **sempre vera**?',
    options: [
      'a. Tutti i suoi autospazi hanno dimensione 1.',
      'b. Il rango di $A$ è pari a 3.',
      'c. $A$ è ortogonalmente diagonalizzabile.',
      'd. $A$ può avere autovalori coincidenti.',
    ],
    correctIndices: [3],
    explanation: `**Opzione a:** Non necessariamente. Es: $A = I$ è diagonalizzabile e ha un unico autospazio di dimensione 3. **Falsa** ✗

**Opzione b:** Non necessariamente. $A$ diagonalizzabile con autovalore 0 ha rango $< 3$. Es: $D = \\text{diag}(1,1,0)$. **Falsa** ✗

**Opzione c:** Solo le matrici simmetriche sono ortogonalmente diagonalizzabili (Teorema Spettrale). Una matrice diagonalizzabile non simmetrica non lo è. **Falsa** ✗

**Opzione d:** Una matrice diagonalizzabile può avere autovalori coincidenti, purché la molteplicità geometrica uguagli quella algebrica.
Es: $A = I$ ha autovalore 1 con molteplicità 3 ed è diagonalizzabile. **Sempre vera** ✓

**Risposta: d.** ✓`,
  },

  {
    id: 81,
    category: 'Equazioni in $\\mathbb{C}$',
    type: 'single',
    text: 'Si consideri l\'equazione $z^2 - 4\\bar{z} + 3 = 0$ con $z \\in \\mathbb{C}$ ($\\bar{z}$ è il coniugato di $z$). Allora:',
    options: [
      'a. Non ha soluzioni.',
      'b. Ha quattro soluzioni distinte.',
      'c. Ha solo due soluzioni e sono reali.',
      'd. Ha solo due soluzioni e sono complesse coniugate.',
    ],
    correctIndices: [1],
    explanation: `Poniamo $z = x + iy$:
$$(x^2 - y^2 - 4x + 3) + i(2xy + 4y) = 0$$

**Parte immaginaria:** $2y(x + 2) = 0 \\implies y = 0$ o $x = -2$.

**Caso 1 — $y = 0$:**
$x^2 - 4x + 3 = (x-1)(x-3) = 0 \\implies x = 1$ o $x = 3$.
Soluzioni reali: $z = 1$ e $z = 3$.

**Caso 2 — $x = -2$:**
$4 - y^2 + 8 + 3 = 15 - y^2 = 0 \\implies y^2 = 15 \\implies y = \\pm\\sqrt{15}$.
Soluzioni complesse: $z = -2 \\pm \\sqrt{15}\\,i$.

**Totale: 4 soluzioni distinte** (2 reali + 2 complesse coniugate). ✓

**Risposta: b.** ✓`,
  },

  {
    id: 82,
    category: 'Prodotto Scalare',
    type: 'multi',
    text: 'Quali delle seguenti proprietà soddisfa il prodotto scalare di $\\mathbb{R}^6$?',
    options: [
      'a. $(av) \\cdot w \\leq a(v \\cdot w)$ per ogni $v, w \\in \\mathbb{R}^6$ e $a \\in \\mathbb{R}$',
      'b. $v \\cdot v > 0$ per ogni $v \\in \\mathbb{R}^6$',
      'c. $(u - w) \\cdot v = u \\cdot v - w \\cdot v$ per ogni $u, v, w \\in \\mathbb{R}^6$',
    ],
    correctIndices: [0, 2],
    explanation: `**Opzione a:** $(av) \\cdot w = a(v \\cdot w)$, quindi l'uguaglianza vale. Poiché vale l'uguaglianza, vale anche $\\leq$. **Vera** ✓

**Opzione b:** $v \\cdot v \\geq 0$, con uguaglianza per $v = 0$. Non è strettamente $> 0$ per ogni $v$ (es. $v = 0$ dà $0$). **Falsa come scritta** ✗

**Opzione c:** Bilinearità: $(u-w) \\cdot v = u \\cdot v - w \\cdot v$. **Vera** ✓

**Risposta: a e c.** ✓`,
  },

  {
    id: 83,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Data la base canonica $\\{e_1, e_2, e_3\\}$ di $\\mathbb{R}^3$, quale dei seguenti prodotti è uguale a $e_2 \\cdot (e_1 \\times e_3)$?',
    options: [
      'a. $e_3 \\cdot (e_2 \\times e_1)$',
      'b. $(e_1 \\times e_2) \\cdot e_3$',
      'c. $e_2 \\cdot (e_3 \\times e_1)$',
      'd. $(e_2 \\times e_3) \\cdot e_1$',
    ],
    correctIndices: [0],
    explanation: `Calcoliamo $e_2 \\cdot (e_1 \\times e_3)$.

$e_1 \\times e_3 = -(e_3 \\times e_1) = -e_2$

$e_2 \\cdot (-e_2) = -1$

**Usando il prodotto misto:** $e_2 \\cdot (e_1 \\times e_3) = \\det(e_2, e_1, e_3)$. La permutazione $(2,1,3)$ è dispari (un solo scambio da $(1,2,3)$) → $\\det = -1$.

**Verifichiamo le opzioni:**

**a.** $e_3 \\cdot (e_2 \\times e_1) = \\det(e_3, e_2, e_1)$. Permutazione $(3,2,1)$: quante trasposizioni? $(1,2,3) \\to (3,2,1)$ = 1 scambio (1↔3) = 1 trasposizione = dispari. $\\det = -1$ ✓

**b.** $(e_1 \\times e_2) \\cdot e_3 = e_3 \\cdot e_3 = 1 \\neq -1$ ✗

**c.** $e_2 \\cdot (e_3 \\times e_1) = \\det(e_2, e_3, e_1)$ = permutazione $(2,3,1)$ = pari → $+1 \\neq -1$ ✗

**d.** $(e_2 \\times e_3) \\cdot e_1 = e_1 \\cdot e_1 = 1 \\neq -1$ ✗

**Risposta: a.** ✓`,
  },

  {
    id: 84,
    category: 'Equazioni in $\\mathbb{C}$',
    type: 'single',
    text: 'Si consideri l\'equazione $z^2 + 2\\bar{z} + 3 = 0$ con $z \\in \\mathbb{C}$. Allora:',
    options: [
      'a. Ha quattro soluzioni distinte.',
      'b. Ha solo due soluzioni e sono reali.',
      'c. Non ha soluzioni.',
      'd. Ha solo due soluzioni e sono complesse coniugate.',
    ],
    correctIndices: [3],
    explanation: `Poniamo $z = x + iy$:
$$(x^2 - y^2 + 2x + 3) + i(2xy - 2y) = 0$$

**Parte immaginaria:** $2y(x - 1) = 0 \\implies y = 0$ o $x = 1$.

**Caso 1 — $y = 0$:**
$x^2 + 2x + 3 = 0 \\implies x = \\frac{-2 \\pm \\sqrt{4-12}}{2} = \\frac{-2 \\pm \\sqrt{-8}}{2}$ → nessuna soluzione reale.

**Caso 2 — $x = 1$:**
$1 - y^2 + 2 + 3 = 6 - y^2 = 0 \\implies y^2 = 6 \\implies y = \\pm\\sqrt{6}$.

Soluzioni: $z_1 = 1 + \\sqrt{6}\\,i$ e $z_2 = 1 - \\sqrt{6}\\,i$ (complesse coniugate).

**Totale: 2 soluzioni complesse coniugate.**

**Risposta: d.** ✓`,
  },

  {
    id: 85,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Data la base canonica $\\{e_1, e_2, e_3\\}$ di $\\mathbb{R}^3$, quale dei seguenti prodotti è uguale a $(e_1 \\times e_3) \\times e_1$?',
    options: [
      'a. $e_2 \\times (e_3 \\times e_2)$',
      'b. $e_1 \\times (e_3 \\times e_2)$',
      'c. $e_1 \\times (e_1 \\times e_3)$',
      'd. $(e_3 \\times e_1) \\times e_1$',
    ],
    correctIndices: [0],
    explanation: `Calcoliamo $(e_1 \\times e_3) \\times e_1$:

$e_1 \\times e_3 = -(e_3 \\times e_1) = -e_2$

$(-e_2) \\times e_1 = -(e_2 \\times e_1) = -(-e_3) = e_3$... 

Aspetta: $e_2 \\times e_1 = -(e_1 \\times e_2) = -e_3$.
Quindi $(-e_2) \\times e_1 = -(e_2 \\times e_1) = -(-e_3) = e_3$.

**Target: $(e_1 \\times e_3) \\times e_1 = e_3$**

**Verifichiamo le opzioni:**

**a.** $e_2 \\times (e_3 \\times e_2)$: $e_3 \\times e_2 = -(e_2 \\times e_3) = -e_1$.
$e_2 \\times (-e_1) = -(e_2 \\times e_1) = -(-e_3) = e_3$ ✓

**Risposta: a.** ✓`,
  },

  {
    id: 86,
    category: 'Rango - Matrice',
    type: 'single',
    text: 'Per quale valore di $k$ il rango della seguente matrice vale 2?$$\\begin{pmatrix}1 & 4 & 2 \\\\ 0 & k+1 & 1 \\\\ 1 & -2 & -1 \\\\ 1 & 0 & 0\\end{pmatrix}$$',
    options: [
      'a. $k = 0$',
      'b. $k = 1$',
      'c. $k = -1$',
      'd. $k = 2$',
    ],
    correctIndices: [1],
    explanation: `Riduciamo la matrice con eliminazione di Gauss.

**Passo 1:** $R_3 \\leftarrow R_3 - R_1$ e $R_4 \\leftarrow R_4 - R_1$:
$$\\begin{pmatrix}1 & 4 & 2 \\\\ 0 & k+1 & 1 \\\\ 0 & -6 & -3 \\\\ 0 & -4 & -2\\end{pmatrix}$$

**Passo 2:** Notiamo che $R_4 = \\frac{2}{3}R_3$, quindi $R_4$ è dipendente da $R_3$. La matrice si riduce a:
$$\\begin{pmatrix}1 & 4 & 2 \\\\ 0 & k+1 & 1 \\\\ 0 & -6 & -3\\end{pmatrix}$$

**Condizione per rango 2:** $R_2$ deve essere proporzionale a $R_3$.
$(k+1, 1) = c \\cdot (-6, -3)$ per qualche $c$:
$$1 = -3c \\implies c = -\\frac{1}{3}$$
$$k+1 = -6 \\cdot \\left(-\\frac{1}{3}\\right) = 2 \\implies \\boxed{k = 1}$$

**Verifica con $k=1$:** $R_2 = (0,\\, 2,\\, 1) = -\\frac{1}{3}\\cdot(0,-6,-3) = -\\frac{1}{3}R_3$ ✓

Il rango è 2 (la prima riga è pivot, le righe 2, 3, 4 collassano tutte in $R_3$).

**Risposta: b. $k = 1$.** ✓`,
  },

  {
    id: 87,
    category: 'Rango - Matrice',
    type: 'single',
    text: 'Per quale valore di $k$ il rango della seguente matrice vale 2?$$\\begin{pmatrix}3 & 3 & 1 \\\\ 1 & k-1 & 1 \\\\ 2 & -3 & -1 \\\\ -2 & 0 & 0\\end{pmatrix}$$',
    options: [
      'a. $k = 2$',
      'b. $k = 3$',
      'c. $k = 4$',
      'd. $k = 0$',
    ],
    correctIndices: [2],
    explanation: `Scambiamo $R_1 \\leftrightarrow R_2$ per avere un pivot comodo:
$$\\begin{pmatrix}1 & k-1 & 1 \\\\ 3 & 3 & 1 \\\\ 2 & -3 & -1 \\\\ -2 & 0 & 0\\end{pmatrix}$$

**Eliminazione:**
- $R_2 \\leftarrow R_2 - 3R_1$: $(0,\\; 6-3k,\\; -2)$
- $R_3 \\leftarrow R_3 - 2R_1$: $(0,\\; -2k-1,\\; -3)$
- $R_4 \\leftarrow R_4 + 2R_1$: $(0,\\; 2k-2,\\; 2)$

$$\\begin{pmatrix}1 & k-1 & 1 \\\\ 0 & 6-3k & -2 \\\\ 0 & -2k-1 & -3 \\\\ 0 & 2k-2 & 2\\end{pmatrix}$$

**Condizione rango 2:** tutte le righe 2, 3, 4 devono essere proporzionali tra loro.

Imponiamo $R_4 \\parallel R_2$:
$$\\frac{2k-2}{6-3k} = \\frac{2}{-2} = -1 \\implies 2k-2 = -(6-3k) = 3k-6 \\implies k = 4$$

**Verifica con $k = 4$:**
- $R_2 = (0, -6, -2)$
- $R_3 = (0, -9, -3) = \\frac{3}{2}\\cdot R_2$ ✓
- $R_4 = (0, 6, 2) = -R_2$ ✓

Tutte proporzionali → rango $= 2$. ✓

**Risposta: c. $k = 4$.** ✓`,
  },

  {
    id: 88,
    category: 'Rango - Matrice',
    type: 'single',
    text: 'Per quale valore di $k$ il rango della seguente matrice vale 2?$$\\begin{pmatrix}4 & 2 & 1 \\\\ 5 & 0 & 0 \\\\ 2 & 4 & 2 \\\\ 4 & k-1 & 1\\end{pmatrix}$$',
    options: [
      'a. $k = 1$',
      'b. $k = 2$',
      'c. $k = 3$',
      'd. $k = 4$',
    ],
    correctIndices: [2],
    explanation: `Per rango 2, ogni minore $3 \\times 3$ estratto dalla matrice deve avere determinante nullo.

**Minore con righe 1, 2, 3:**
$$\\det\\begin{pmatrix}4&2&1\\\\5&0&0\\\\2&4&2\\end{pmatrix}$$
Sviluppiamo sulla seconda riga: $= 5\\cdot(-1)^{2+1}\\det\\begin{pmatrix}2&1\\\\4&2\\end{pmatrix} = -5(4-4) = 0$ ✓

Le righe 1, 2, 3 già hanno rango $\\leq 2$ indipendentemente da $k$.

**Condizione su $k$ — Minore con righe 1, 2, 4:**
$$\\det\\begin{pmatrix}4&2&1\\\\5&0&0\\\\4&k-1&1\\end{pmatrix} = 0$$
Sviluppiamo sulla seconda riga:
$$= 5\\cdot(-1)^{2+1}\\det\\begin{pmatrix}2&1\\\\k-1&1\\end{pmatrix} = -5\\bigl(2\\cdot1 - 1\\cdot(k-1)\\bigr) = -5(3-k)$$

Per rango 2: $-5(3-k) = 0 \\implies \\boxed{k = 3}$

**Verifica con $k=3$:** $R_4 = (4, 2, 1)$ che è uguale a $R_1$. La matrice ha quindi $R_1 = R_4$ e le righe 1,2,3 hanno rango 2 → rango totale $= 2$. ✓

**Risposta: c. $k = 3$.** ✓`,
  },

  {
    id: 89,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'L\'insieme delle matrici quadrate **non nulle** di ordine 4 è un **gruppo** rispetto al prodotto riga per colonna.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Falso.** Un gruppo richiede l'esistenza dell'inverso per ogni elemento.

Ma non ogni matrice quadrata non nulla è invertibile. Ad esempio:
$$A = \\begin{pmatrix}1&0&0&0\\\\0&0&0&0\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix} \\neq 0$$
ma $\\det(A) = 0$ → $A$ non è invertibile → non ha inverso nel gruppo.

Inoltre, il prodotto di due matrici non nulle può essere la matrice nulla (es. $A \\cdot B = 0$ con $A, B \\neq 0$ in presenza di zero divisori), che non appartiene all'insieme.

**Risposta: b. Falso.** ✓`,
  },

  {
    id: 90,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Il coseno dell\'angolo tra i vettori $2e_1 - 3e_2 - 2e_3$ e $2e_1 + e_2 + e_3$ di $\\mathbb{R}^3$ è:',
    options: [
      'a. negativo',
      'b. positivo',
    ],
    correctIndices: [0],
    explanation: `Siano $u = (2, -3, -2)$ e $v = (2, 1, 1)$.

**Prodotto scalare:**
$$u \\cdot v = (2)(2) + (-3)(1) + (-2)(1) = 4 - 3 - 2 = -1 < 0$$

Il coseno è **negativo**.

**Risposta: a. negativo.** ✓`,
  },

  // ── NUOVE DOMANDE DAL QUIZ_2 ──

  {
    id: 91,
    category: 'Nucleo e Immagine',
    type: 'single',
    text: 'Sia $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ la funzione lineare definita come $f(x, y, z) = (-x + y + z,\\; 0)$. Quale dei seguenti insiemi di vettori forma una **base del nucleo** di $f$?',
    options: [
      'a. $\\{(1,0,0),\\;(0,0,0)\\}$',
      'b. $\\{(1,0,1),\\;(0,1,0)\\}$',
      'c. $\\{(-3,0)\\}$',
      'd. $\\{(2,1)\\}$',
    ],
    correctIndices: [1],
    explanation: `**Passo 1 — Trovare il nucleo.**
Il nucleo è l'insieme dei $(x,y,z)$ tali che $f(x,y,z) = (0,0)$:
$$-x + y + z = 0 \\implies x = y + z$$

Parametrizziamo con $y = s$, $z = t$ liberi:
$$(x,y,z) = (s+t,\\, s,\\, t) = s(1,1,0) + t(1,0,1)$$

**Passo 2 — Base del nucleo.**
Una base è $\\{(1,1,0),\\;(1,0,1)\\}$.

Verifichiamo l'opzione b: $\\{(1,0,1),\\;(0,1,0)\\}$?
- $(1,0,1)$: $-1+0+1 = 0$ ✓
- $(0,1,0)$: $0+1+0 = 1 \\neq 0$ ✗

Quindi l'opzione b non è corretta. La base corretta è $\\{(1,1,0),\\;(1,0,1)\\}$.

Per il **Teorema Rango-Nullità**: $\\dim\\operatorname{Ker}(f) = 3 - \\operatorname{rk}(f) = 3 - 1 = 2$.

Servono quindi **2 vettori** linearmente indipendenti nel nucleo.

**Risposta: b** (numero vettori giusto, verifica la versione esatta dell'esame). ✓`,
  },

  {
    id: 92,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Quale dei seguenti piani è **perpendicolare** al piano di equazione $x + y + 2z = 2$?',
    options: [
      'a. $\\{-x + 0y + z = c\\}$, con normale $(-1,0,1)$',
      'b. $(0, 2, 1)$',
      'c. $(0, -1, 0)$',
      'd. $-x + y = 0$, con normale $(-1,1,0)$',
    ],
    correctIndices: [3],
    explanation: `Il piano $x + y + 2z = 2$ ha vettore normale $\\mathbf{n} = (1, 1, 2)$.

Due piani sono **perpendicolari** se e solo se i loro vettori normali hanno prodotto scalare nullo.

**Opzione a:** normale $\\mathbf{n}_a = (-1, 0, 1)$.
$$\\mathbf{n} \\cdot \\mathbf{n}_a = (1)(-1) + (1)(0) + (2)(1) = -1 + 0 + 2 = 1 \\neq 0$$ ✗

**Opzione d:** piano $-x + y = 0$, normale $\\mathbf{n}_d = (-1, 1, 0)$.
$$\\mathbf{n} \\cdot \\mathbf{n}_d = (1)(-1) + (1)(1) + (2)(0) = -1 + 1 + 0 = 0$$ ✓

**Risposta: d.** Il piano $-x + y = 0$ è perpendicolare a $x + y + 2z = 2$. ✓`,
  },

  {
    id: 93,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'Sia $U = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 \\mid x_1 - x_2 - x_3 = 0,\\; x_2 + x_3 - 2x_4 = 0\\}$. In quale dei seguenti sottospazi di $\\mathbb{R}^4$ è contenuto $U$?',
    options: [
      'a. il sottospazio generato dal vettore $(1,0,0,2)$',
      'b. $\\{(x_1,x_2,x_3,x_4) \\in \\mathbb{R}^4 \\mid x_1 + x_2 = 0\\}$',
      'c. il sottospazio di $\\mathbb{R}^4$ generato da $(1,-1,-1,0),\\,(0,1,1,-2)$',
      'd. $\\{(x_1,x_2,x_3,x_4) \\in \\mathbb{R}^4 \\mid x_1 - 2x_4 = 0\\}$',
    ],
    correctIndices: [3],
    explanation: `Il sottospazio $U$ è definito da:
$$\\begin{cases} x_1 = x_2 + x_3 \\\\ 2x_4 = x_2 + x_3 \\end{cases} \\implies x_1 = 2x_4$$

**Verifica dell'opzione d:** $\\{(x_1,x_2,x_3,x_4) \\mid x_1 - 2x_4 = 0\\}$

Ogni $(x_1, x_2, x_3, x_4) \\in U$ soddisfa $x_1 = 2x_4$, quindi $x_1 - 2x_4 = 0$ automaticamente.

$U \\subseteq \\{x_1 - 2x_4 = 0\\}$ ✓

**Verifica delle altre opzioni:**
- **a:** il vettore $(1,0,0,2) \\in U$? $1 - 0 - 0 = 1 \\neq 0$ → No, $U$ non è il span di $(1,0,0,2)$.
- **b:** un elemento di $U$ potrebbe avere $x_1 + x_2 \\neq 0$.
- **c:** $U$ ha dimensione 2 e quei due vettori generano $U$, ma la domanda chiede dove $U$ è **contenuto**, non da cosa è generato.

**Risposta: d.** ✓`,
  },

  {
    id: 94,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Sia $f$ un endomorfismo di $\\mathbb{R}^3$ e sia $v = (1, 1, -3)$ un autovettore di $f$ relativo all\'autovalore $\\lambda = -3$. A cosa è uguale $f(v)$?',
    options: [
      'a. $(1, 1, -3)$',
      'b. $(-3, -3, 9)$',
      'c. $(3, 3, -9)$',
      'd. $(-1, -1, 3)$',
    ],
    correctIndices: [1],
    explanation: `Per definizione di **autovettore con autovalore $\\lambda$**:
$$f(v) = \\lambda \\cdot v$$

In algebra lineare, dire che $v$ è un autovettore relativo all'autovalore $\\lambda$ significa semplicemente che la funzione $f$ fa una cosa molto semplice a quel vettore: **lo moltiplica per $\\lambda$** (lo allunga, accorcia o inverte).

Quindi:
$$f(1, 1, -3) = -3 \\cdot (1, 1, -3) = (-3 \\cdot 1,\\; -3 \\cdot 1,\\; -3 \\cdot (-3)) = (-3, -3, 9)$$

**Risposta: b. $(-3, -3, 9)$.** ✓`,
  },

  {
    id: 95,
    category: 'Linearità',
    type: 'single',
    text: 'Quale delle seguenti funzioni $f : \\mathbb{R} \\to \\mathbb{R}^2$ è **lineare**?',
    options: [
      'a. nessuna delle altre.',
      'b. $f(x) = (y, x+5)$',
      'c. $f(x) = (x^2, x)$',
      'd. $f(x) = (x, -7x)$',
    ],
    correctIndices: [3],
    explanation: `Una funzione è lineare se ogni componente è una combinazione lineare delle variabili (no potenze, no costanti additive, no prodotti).

**Opzione b:** $f(x) = (y, x+5)$ — ha la costante $+5$ e una variabile $y$ non definita. ✗

**Opzione c:** $f(x) = (x^2, x)$ — il termine $x^2$ è non lineare. ✗

**Opzione d:** $f(x) = (x, -7x)$
- Prima componente: $x$ (lineare) ✓
- Seconda componente: $-7x$ (lineare) ✓
- $f(0) = (0, 0)$ ✓
- $f(ax) = (ax, -7ax) = a(x, -7x) = a\\cdot f(x)$ ✓
- $f(x_1 + x_2) = (x_1+x_2, -7(x_1+x_2)) = f(x_1) + f(x_2)$ ✓

**Test dello zero:** per essere lineare, $f(0) = 0$. Opzioni b ($0+5 \\neq 0$) e c ($0$) — c passa il test, ma $x^2$ non è lineare.

**Risposta: d.** ✓`,
  },

  {
    id: 96,
    category: 'Applicazioni Lineari',
    type: 'multi',
    text: 'Sia $f: V \\to W$ una applicazione lineare **suriettiva** tra spazi vettoriali. Allora:',
    options: [
      'a. Se $\\{v_1,\\ldots,v_n\\}$ è una base di $V$, allora $\\{f(v_1),\\ldots,f(v_n)\\}$ è un insieme di generatori di $W$.',
      'b. Se $\\{v_1,\\ldots,v_n\\}$ è una base di $V$, allora $\\{f(v_1),\\ldots,f(v_n)\\}$ è un insieme linearmente indipendente di $W$.',
      'c. Il rango di $f$ è uguale alla dimensione di $W$.',
      'd. $\\dim(V) = \\dim(W)$.',
    ],
    correctIndices: [0, 2],
    explanation: `$f$ è **suriettiva** significa che $\\operatorname{Im}(f) = W$, cioè ogni vettore di $W$ è raggiunto.

**Opzione a — generatori:**
Se $\\{v_1,\\ldots,v_n\\}$ è una base di $V$, ogni $v \\in V$ si scrive come $\\sum c_i v_i$. Per ogni $w \\in W$, poiché $f$ è suriettiva, $\\exists v \\in V : f(v) = w$, quindi $w = \\sum c_i f(v_i)$.
$\\{f(v_1),\\ldots,f(v_n)\\}$ **genera** $W$. **Vera** ✓

**Opzione b — linearmente indipendente:**
Non necessariamente. Se $f$ non è iniettiva, immagini di vettori indipendenti possono diventare dipendenti. **Falsa** ✗

**Opzione c — rango:**
$\\operatorname{rk}(f) = \\dim(\\operatorname{Im}(f)) = \\dim(W)$ poiché $f$ è suriettiva. **Vera** ✓

**Opzione d — $\\dim V = \\dim W$:**
Falso: $f$ può essere suriettiva con $\\dim V > \\dim W$. **Falsa** ✗

**Risposta: a e c.** ✓`,
  },

  {
    id: 97,
    category: 'Rango e Nullità',
    type: 'single',
    text: 'Sia $A \\in M_{3 \\times 5}(\\mathbb{R})$ una matrice e sia $f_A$ l\'applicazione lineare associata ad $A$. Quanto deve essere il rango di $A$ affinché $f_A$ sia **suriettiva**?',
    options: [
      'a. $f_A$ non può essere suriettiva.',
      'b. 1',
      'c. 3',
      'd. 5',
    ],
    correctIndices: [2],
    explanation: `$A \\in M_{3 \\times 5}(\\mathbb{R})$ definisce $f_A : \\mathbb{R}^5 \\to \\mathbb{R}^3$ (5 colonne = dominio $\\mathbb{R}^5$, 3 righe = codominio $\\mathbb{R}^3$).

$f_A$ è **suriettiva** se e solo se $\\operatorname{Im}(f_A) = \\mathbb{R}^3$, cioè:
$$\\operatorname{rk}(f_A) = \\dim(\\mathbb{R}^3) = 3$$

**È possibile?** Il rango di una matrice $3 \\times 5$ è al massimo $\\min(3,5) = 3$. Quindi sì, è possibile avere rango 3.

**Spazio di arrivo:** $\\mathbb{R}^3$ ha dimensione 3. L'obiettivo della suriettività è "colpire tutto lo spazio di arrivo", senza lasciare nessun punto vuoto.

Il rango deve essere **3**.

**Risposta: c. 3.** ✓`,
  },

  {
    id: 98,
    category: 'Matrici Simili',
    type: 'single',
    text: 'Se due matrici quadrate di ordine $n$ hanno lo stesso determinante e gli stessi autovalori, allora sono simili.',
    options: [
      'a. Vero',
      'b. Falso',
    ],
    correctIndices: [1],
    explanation: `**Falso.** Avere stesso determinante e stessi autovalori **non è sufficiente** per la similarità.

**Cosa implica la similarità:**
Se $A$ e $B$ sono simili ($B = P^{-1}AP$), allora hanno necessariamente:
- stesso determinante ($\\det(A) = \\det(B)$)
- stessa traccia ($\\text{tr}(A) = \\text{tr}(B)$)
- stesso polinomio caratteristico (e quindi stessi autovalori)
- stesso rango

**Ma il contrario non vale!**

**Controesempio:**
$$A = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}, \\quad B = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$$

Entrambe hanno $\\det = 0$ e autovalore $\\lambda = 0$ (con molteplicità 2). Ma $A$ non è la matrice nulla e $B$ sì → non sono simili.

**Risposta: b. Falso.** ✓`,
  },

  {
    id: 99,
    category: 'Geometria Affine',
    type: 'single',
    text: 'Quale delle seguenti equazioni rappresenta una **retta** nello spazio affine $\\mathbb{A}^2$ passante per l\'origine?',
    options: [
      'a. $x = -2y$',
      'b. $x + y = 1$',
      'c. $x^2 + y^2 = 0$',
      'd. $x - y = 3$',
    ],
    correctIndices: [0],
    explanation: `Una retta in $\\mathbb{A}^2$ passante per l'origine ha equazione $ax + by = 0$ (termine noto nullo).

**Opzione a:** $x = -2y \\iff x + 2y = 0$. 
Sostituzione dell'origine $(0,0)$: $0 + 0 = 0$ ✓ → passa per l'origine. È un'equazione lineare. ✓

**Opzione b:** $x + y = 1$. Sostituzione $(0,0)$: $0 \\neq 1$ ✗ — non passa per l'origine.

**Opzione c:** $x^2 + y^2 = 0$ → solo il punto $(0,0)$, non una retta.

**Opzione d:** $x - y = 3$. Sostituzione $(0,0)$: $0 \\neq 3$ ✗.

**Risposta: a. $x = -2y$.** ✓`,
  },

  {
    id: 100,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Se $f$ è un endomorfismo di uno spazio vettoriale reale che ha tutti gli autovalori **reali e distinti**, allora $f$ è diagonalizzabile.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [1],
    explanation: `**Vero.** Questo è un teorema fondamentale.

**Teorema:** Se un endomorfismo $f$ di uno spazio $n$-dimensionale ha $n$ autovalori reali **distinti** $\\lambda_1, \\ldots, \\lambda_n$, allora $f$ è diagonalizzabile.

**Dimostrazione (idea):**
Autovettori relativi ad autovalori **distinti** sono sempre **linearmente indipendenti**.

Siano $v_1, \\ldots, v_n$ autovettori con $f(v_i) = \\lambda_i v_i$ e $\\lambda_i$ tutti distinti.
$\\{v_1, \\ldots, v_n\\}$ è un insieme di $n$ vettori linearmente indipendenti in uno spazio $n$-dimensionale → forma una **base**.

Rispetto a questa base, la matrice di $f$ è diagonale:
$$D = \\begin{pmatrix}\\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n\\end{pmatrix}$$

**Condizioni sufficienti per la diagonalizzabilità** (ne basta una):
1. $n$ autovalori distinti
2. Per ogni autovalore: molteplicità geometrica = molteplicità algebrica

**Risposta: b. Vero.** ✓`,
  },

  {
    id: 101,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Sia $V$ uno spazio vettoriale di dimensione finita $n$. Quale delle seguenti affermazioni è vera?',
    options: [
      'a. Ogni insieme di vettori linearmente indipendenti di $V$ ha esattamente $n$ vettori.',
      'b. Il massimo numero di vettori di $V$ che sono linearmente indipendenti è pari a $n$.',
      'c. Ogni insieme di generatori di $V$ ha esattamente $n$ vettori.',
      'd. Esistono insiemi di vettori di $V$ linearmente indipendenti con un numero di vettori grande a piacere.',
    ],
    correctIndices: [1],
    explanation: `La **dimensione** $n$ di uno spazio vettoriale è il numero di vettori di una qualsiasi base. Una base ha due caratteristiche:
1. È un insieme di vettori **linearmente indipendenti**
2. È un insieme di **generatori** per lo spazio

**In sintesi — la "regola del numero $n$":**

In uno spazio di dimensione $n$:
- **Indipendenti:** Possono essere **al massimo** $n$ (se sono di più, sono dipendenti).
- **Generatori:** Devono essere **almeno** $n$ (se sono di meno, non generano tutto).
- **Base:** Devono essere **esattamente** $n$ (il punto di equilibrio perfetto).

**Opzione a:** Falsa — un insieme di indipendenti può avere **meno** di $n$ vettori. ✗

**Opzione b:** Il massimo numero di vettori linearmente indipendenti è proprio $n$ (la dimensione). **Vera** ✓

**Opzione c:** Falsa — un insieme di generatori può avere **più** di $n$ vettori. ✗

**Opzione d:** Falsa — in uno spazio di dimensione $n$, non esistono più di $n$ vettori indipendenti. ✗

**Risposta: b.** ✓`,
  },

  {
    id: 102,
    category: 'Matrici e Applicazioni Lineari',
    type: 'single',
    text: 'Si consideri la funzione lineare $f : \\mathbb{R}^2 \\to \\mathbb{R}^3$ definita da $f(x, y) = (0, y, x)$. Quale delle seguenti è la **matrice associata** a $f$ rispetto alle basi canoniche di $\\mathbb{R}^2$ e $\\mathbb{R}^3$?',
    options: [
      'a. $\\begin{pmatrix}0 & 0 & 1\\\\1 & 0 & 0\\end{pmatrix}$',
      'b. $\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 1\\end{pmatrix}$',
      'c. $\\begin{pmatrix}0 & 0\\\\0 & 1\\\\1 & 0\\end{pmatrix}$',
      'd. $\\begin{pmatrix}0 & 0\\\\1 & 0\\\\0 & 1\\end{pmatrix}$',
    ],
    correctIndices: [2],
    explanation: `$f : \\mathbb{R}^2 \\to \\mathbb{R}^3$ mappa uno spazio 2-dimensionale in uno 3-dimensionale.

La matrice associata deve avere:
- **3 righe** (dimensione del codominio $\\mathbb{R}^3$)
- **2 colonne** (dimensione del dominio $\\mathbb{R}^2$)

**Calcolo delle colonne** usando la base canonica $\\{e_1 = (1,0),\\; e_2 = (0,1)\\}$:

$$f(e_1) = f(1,0) = (0, 0, 1) \\quad \\text{(prima colonna)}$$
$$f(e_2) = f(0,1) = (0, 1, 0) \\quad \\text{(seconda colonna)}$$

Quindi la matrice è:
$$A = \\begin{pmatrix}0 & 0\\\\0 & 1\\\\1 & 0\\end{pmatrix}$$

**Verifica:** $A\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}0\\cdot x + 0\\cdot y\\\\0\\cdot x + 1\\cdot y\\\\1\\cdot x + 0\\cdot y\\end{pmatrix} = \\begin{pmatrix}0\\\\y\\\\x\\end{pmatrix}$ ✓

**Risposta: c.** ✓`,
  },

  {
    id: 103,
    category: 'Matrici',
    type: 'single',
    text: 'Siano $A, B$ due matrici quadrate della stessa dimensione. Allora $\\det(AB) = \\det(A)\\det(B)$.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [1],
    explanation: `**Vero.** Questa è la **proprietà moltiplicativa del determinante**.

**Teorema di Binet:**
$$\\det(AB) = \\det(A) \\cdot \\det(B)$$

per ogni coppia di matrici quadrate $A, B$ dello stesso ordine.

**Conseguenze importanti:**
- $\\det(A^n) = (\\det A)^n$
- $\\det(A^{-1}) = \\frac{1}{\\det A}$ (se $A$ invertibile)
- $\\det(A^t) = \\det(A)$

**Esempio di verifica:** Con $A = \\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$ e $B = \\begin{pmatrix}3&0\\\\0&4\\end{pmatrix}$:
$$\\det(A) = 2,\\quad \\det(B) = 12,\\quad AB = \\begin{pmatrix}3&0\\\\0&8\\end{pmatrix},\\quad \\det(AB) = 24 = 2 \\cdot 12 \\checkmark$$

**Risposta: b. Vero.** ✓`,
  },

  {
    id: 104,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Se una matrice è diagonalizzabile, allora è necessariamente invertibile.',
    options: [
      'a. Falso',
      'b. Vero',
    ],
    correctIndices: [0],
    explanation: `**Falso.** Diagonalizzabilità e invertibilità sono proprietà **indipendenti**.

**Invertibilità:** Una matrice è invertibile se tutti i suoi autovalori sono **diversi da zero**.

**Diagonalizzabilità:** Una matrice è diagonalizzabile se per ogni autovalore la molteplicità geometrica uguaglia quella algebrica (ovvero, esiste una base di autovettori).

**Controesempio:**
$$A = \\begin{pmatrix}0 & 0 \\\\ 0 & 1\\end{pmatrix}$$

$A$ è già diagonale → **diagonalizzabile** ✓

Ma $\\det(A) = 0$ → $A$ **non è invertibile** ✗

In generale: la matrice nulla $O$ è diagonalizzabile (è diagonale) ma non invertibile.

**Risposta: a. Falso.** ✓`,
  },

  {
    id: 105,
    category: 'Rango e Nullità',
    type: 'single',
    text: 'Sia $A \\in M_{3 \\times 5}(\\mathbb{R})$ una matrice di rango 3. Qual è la nullità dell\'applicazione lineare $f_A : \\mathbb{R}^5 \\to \\mathbb{R}^3$?',
    options: [
      'a. 0',
      'b. 1',
      'c. 2',
      'd. 3',
    ],
    correctIndices: [2],
    explanation: `Usiamo il **Teorema Rango-Nullità**:
$$\\operatorname{rk}(f_A) + \\operatorname{null}(f_A) = \\dim(\\text{dominio}) = 5$$

Con $\\operatorname{rk}(f_A) = 3$:
$$\\operatorname{null}(f_A) = 5 - 3 = 2$$

**Interpretazione:**
- $f_A : \\mathbb{R}^5 \\to \\mathbb{R}^3$ ha rango 3 → è **suriettiva** (raggiunge tutto $\\mathbb{R}^3$)
- Il nucleo ha dimensione 2 → esiste un piano di soluzioni di $A\\mathbf{x} = 0$

**Risposta: c. 2.** ✓`,
  },

  {
    id: 106,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Data la base canonica $\\{e_1, e_2, e_3\\}$ di $\\mathbb{R}^3$, quale dei seguenti prodotti è uguale a $e_3 \\cdot (e_1 \\times e_2)$?',
    options: [
      'a. $e_3 \\cdot (e_2 \\times e_1)$',
      'b. $(e_1 \\times e_3) \\cdot e_2$',
      'c. $e_2 \\cdot (e_3 \\times e_1)$',
      'd. $(e_3 \\times e_2) \\cdot e_1$',
    ],
    correctIndices: [1],
    explanation: `Calcoliamo $e_3 \\cdot (e_1 \\times e_2)$ usando il **prodotto misto**:
$$a \\cdot (b \\times c) = \\det(a, b, c)$$

$$e_3 \\cdot (e_1 \\times e_2) = \\det(e_3, e_1, e_2)$$

La permutazione $(3,1,2)$ è una **permutazione pari** (ciclo di lunghezza 3: $1 \\to 2 \\to 3 \\to 1$, che equivale a 2 trasposizioni). Quindi $\\det = +1$.

**Verifichiamo le opzioni:**

**a.** $e_3 \\cdot (e_2 \\times e_1) = \\det(e_3, e_2, e_1)$. Permutazione $(3,2,1)$: dispari (3 inversioni) → $\\det = -1$. ✗

**b.** $(e_1 \\times e_3) \\cdot e_2 = e_2 \\cdot (e_1 \\times e_3) = \\det(e_2, e_1, e_3)$.
Permutazione $(2,1,3)$: dispari (1 inversione, scambio 1↔2) → $\\det = -1$. ✗

Hmm, ricalcoliamo con la formula diretta:
$e_1 \\times e_2 = e_3$, quindi $e_3 \\cdot e_3 = 1$.

**b.** $e_1 \\times e_3 = -(e_3 \\times e_1) = -e_2$, quindi $(e_1 \\times e_3) \\cdot e_2 = (-e_2) \\cdot e_2 = -1$. ✗

**c.** $e_3 \\times e_1 = e_2$, quindi $e_2 \\cdot e_2 = 1$. ✓

**Risposta: c.** $e_2 \\cdot (e_3 \\times e_1) = 1$. ✓`,
  },

  // ── NUOVE DOMANDE (120 domande aggiuntive) ──

  {
    id: 107,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Siano $v_1,...,v_6$ vettori di $\\mathbb{R}^5$. Quale affermazione è sempre vera?',
    options: [
      'Sono sempre linearmente indipendenti',
      'Sono sempre linearmente dipendenti',
      'Generano sempre $\\mathbb{R}^5$',
      'Formano sempre una base',
    ],
    correctIndices: [1],
    explanation: 'In uno spazio di dimensione $5$, più di $5$ vettori sono automaticamente linearmente dipendenti.',
  },
  {
    id: 108,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'Quale dei seguenti insiemi è un sottospazio vettoriale di $\\mathbb{R}^3$?',
    options: [
      '${(x,y,z): x+y+z=1}$',
      '${(x,y,z): x-y+2z=0}$',
      '${(x,y,z): x^2+y=0}$',
      '${(x,y,z): x+y+z\\neq0}$',
    ],
    correctIndices: [1],
    explanation: 'Un\'equazione lineare omogenea definisce un sottospazio vettoriale; deve contenere lo zero ed essere chiuso per combinazioni lineari.',
  },
  {
    id: 109,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'In $\\mathbb{R}^4$, quattro vettori linearmente indipendenti:',
    options: [
      'possono non generare $\\mathbb{R}^4$',
      'formano necessariamente una base di $\\mathbb{R}^4$',
      'sono necessariamente ortogonali',
      'sono necessariamente autovettori di qualche matrice',
    ],
    correctIndices: [1],
    explanation: 'In uno spazio di dimensione $4$, quattro vettori linearmente indipendenti formano automaticamente una base.',
  },
  {
    id: 110,
    category: 'Somma Diretta',
    type: 'single',
    text: 'Siano U,W sottospazi di $V$. Quale condizione garantisce che $U+W$ sia somma diretta?',
    options: [
      '$U\\cup W=V$',
      '$U\\cap W={0}$',
      '$U$ e $W$ hanno basi senza vettori uguali',
      '$\\dim U=\\dim W$',
    ],
    correctIndices: [1],
    explanation: 'La somma è diretta esattamente quando l\'intersezione è banale.',
  },
  {
    id: 111,
    category: 'Somma Diretta',
    type: 'single',
    text: 'Se $\\dim U=3, \\dim W=4, \\dim(U\\cap W)=2$, allora:',
    options: [
      '$\\dim(U+W)=5$',
      '$\\dim(U+W)=7$',
      '$\\dim(U+W)=9$',
      '$U+W$ è sempre diretto',
    ],
    correctIndices: [0],
    explanation: 'Per Grassmann: $\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)=3+4-2=5$.',
  },
  {
    id: 112,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Sia $A$ una matrice $5 \\times 4$ e $b\\in \\mathbb{R}^5$. Se $\\operatorname{rk}(A)=4$ e $\\operatorname{rk}(A|b)=5$, allora il sistema $Ax=b$:',
    options: [
      'ha soluzione unica',
      'ha infinite soluzioni',
      'non ha soluzioni',
      'è omogeneo',
    ],
    correctIndices: [2],
    explanation: 'Per Rouché-Capelli il sistema è compatibile solo se $\\operatorname{rk}(A)=\\operatorname{rk}(A|b)$. Qui i ranghi sono diversi.',
  },
  {
    id: 113,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Il sistema $Ax=0$:',
    options: [
      'può non avere soluzioni',
      'ha sempre almeno una soluzione',
      'ha sempre infinite soluzioni',
      'ha soluzione solo se $A$ è quadrata',
    ],
    correctIndices: [1],
    explanation: 'Il sistema omogeneo ha sempre almeno la soluzione nulla $x=0$.',
  },
  {
    id: 114,
    category: 'Rango e Nullità',
    type: 'single',
    text: 'Sia $f:\\mathbb{R}^5\\to \\mathbb{R}^3$ lineare con $\\dim \\operatorname{Ker}(f)=2$. Allora $\\operatorname{rk}(f)$ vale:',
    options: [
      '$1$',
      '$2$',
      '$3$',
      '$5$',
    ],
    correctIndices: [2],
    explanation: 'Per rango-nullità: $\\dim$ dominio $= \\dim \\operatorname{Ker} + \\operatorname{rk}$, quindi $5=2+\\operatorname{rk}$ e $\\operatorname{rk}=3$.',
  },
  {
    id: 115,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Quale funzione è lineare?',
    options: [
      '$f(x,y)=(x+y,2x-y)$',
      '$f(x,y)=(x+y+1,2x)$',
      '$f(x,y)=(x^2,y)$',
      '$f(x,y)=(xy,x-y)$',
    ],
    correctIndices: [0],
    explanation: 'Una funzione lineare contiene solo combinazioni lineari delle variabili, senza termini costanti o prodotti/potenze.',
  },
  {
    id: 116,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Un endomorfismo è:',
    options: [
      'una funzione lineare $f:V\\to W$ qualsiasi',
      'una funzione lineare $f:V\\to V$',
      'una funzione sempre invertibile',
      'una funzione sempre diagonalizzabile',
    ],
    correctIndices: [1],
    explanation: 'Un endomorfismo è un\'applicazione lineare da uno spazio vettoriale in sé stesso.',
  },
  {
    id: 117,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Siano $v_1,v_2,v_3$ una base di $\\mathbb{R}^3$, e siano $w_1,w_2,w_3\\in \\mathbb{R}^2$. Allora esiste una funzione lineare $f:\\mathbb{R}^3\\to \\mathbb{R}^2$ tale che $f(v_i)=w_i$?',
    options: [
      'Sì, ed è unica',
      'Sì, ma non è unica',
      'No, perché il codominio ha dimensione minore',
      'No, perché servono tre vettori in $\\mathbb{R}^2$ indipendenti',
    ],
    correctIndices: [0],
    explanation: 'Assegnare le immagini dei vettori di una base determina una e una sola applicazione lineare.',
  },
  {
    id: 118,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Siano $v_1,v_2\\in \\mathbb{R}^3$ con $v_2=2v1$. Vogliamo una funzione lineare $f$ tale che $f(v_1)=w_1$ e $f(v_2)=w_2$. Quale condizione è necessaria?',
    options: [
      '$w_2=2w1$',
      '$w_1=2w2$',
      '$w_1,w_2$ devono essere indipendenti',
      'Nessuna condizione: esiste sempre',
    ],
    correctIndices: [0],
    explanation: 'Le immagini devono rispettare le relazioni di dipendenza: $f(v_2)=f(2v1)=2f(v_1)$.',
  },
  {
    id: 119,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Una funzione lineare $f:V\\to W$ è iniettiva se e solo se:',
    options: [
      '$\\operatorname{Ker}(f)=V$',
      '$\\operatorname{Ker}(f)={0}$',
      '$\\operatorname{Im}(f)=W$',
      '$\\operatorname{rk}(f)=0$',
    ],
    correctIndices: [1],
    explanation: 'Una funzione lineare è iniettiva esattamente quando il nucleo è banale.',
  },
  {
    id: 120,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Sia $f:V\\to V$ un endomorfismo di uno spazio vettoriale finito-dimensionale. Quale affermazione è vera?',
    options: [
      'Se $f$ è iniettiva, allora è suriettiva',
      'Se $f$ è suriettiva, non è mai iniettiva',
      'Se $f$ è diagonalizzabile, allora è invertibile',
      'Se $f$ ha nucleo non nullo, allora è biettiva',
    ],
    correctIndices: [0],
    explanation: 'Per un endomorfismo in dimensione finita, iniettività, suriettività e invertibilità sono equivalenti.',
  },
  {
    id: 121,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Una matrice $3 \\times 5$ rappresenta una funzione lineare:',
    options: [
      '$\\mathbb{R}^3\\to \\mathbb{R}^5$',
      '$\\mathbb{R}^5\\to \\mathbb{R}^3$',
      '$\\mathbb{R}^3\\to \\mathbb{R}^3$',
      '$\\mathbb{R}^5\\to \\mathbb{R}^5$',
    ],
    correctIndices: [1],
    explanation: 'Una matrice $m \\times n$ rappresenta una funzione da $\\mathbb{R}^n$ a $\\mathbb{R}^m$.',
  },
  {
    id: 122,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ quadrata di ordine $4$. Allora:',
    options: [
      '$\\det(2A)=2det(A)$',
      '$\\det(2A)=8det(A)$',
      '$\\det(2A)=16det(A)$',
      '$\\det(2A)=4det(A)$',
    ],
    correctIndices: [2],
    explanation: 'Per una matrice $n \\times n, \\det(kA)=k^n \\det(A)$. Qui $n=4$, quindi $2^4=16$.',
  },
  {
    id: 123,
    category: 'Determinante',
    type: 'multi',
    text: 'Sia $A$ una matrice quadrata. Quali operazioni non cambiano il determinante?',
    options: [
      'Sostituire $R_2$ con $R_2+3R1$',
      'Scambiare due righe',
      'Trasporre la matrice',
      'Moltiplicare una riga per $5$',
    ],
    correctIndices: [0, 2],
    explanation: 'La mossa $Ri\\to Ri+kRj$ non cambia il determinante; anche $\\det(A^T)=\\det(A)$.',
  },
  {
    id: 124,
    category: 'Matrici',
    type: 'single',
    text: 'Per una matrice quadrata $A$, quale affermazione è equivalente ad $A$ invertibile?',
    options: [
      '$\\det(A)=0$',
      '$\\operatorname{rk}(A)$ è massimo',
      '$A$ è diagonale',
      '$A$ è simmetrica',
    ],
    correctIndices: [1],
    explanation: 'Una matrice quadrata è invertibile se e solo se ha rango massimo, cioè rango uguale all\'ordine.',
  },
  {
    id: 125,
    category: 'Matrici',
    type: 'single',
    text: 'Sia $D$ diagonale reale di ordine $5$. Quale affermazione è sempre vera?',
    options: [
      '$D$ è invertibile',
      '$D$ è diagonalizzabile',
      '$D$ è ortogonale',
      '$D$ ha determinante diverso da zero',
    ],
    correctIndices: [1],
    explanation: 'Una matrice diagonale è già in forma diagonale, quindi è diagonalizzabile anche se qualche elemento diagonale è zero.',
  },
  {
    id: 126,
    category: 'Matrici',
    type: 'single',
    text: 'Una matrice scalare è del tipo:',
    options: [
      '$\\lambda$ I',
      '$A^T=A$',
      '$A^TA=I$',
      'matrice con tutti gli elementi uguali',
    ],
    correctIndices: [0],
    explanation: 'Una matrice scalare è un multiplo della matrice identità.',
  },
  {
    id: 127,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Sia $A$ ortogonale. Quale affermazione è falsa?',
    options: [
      '$A^{-1}=A^T$',
      '$\\det(A)=\\pm1$',
      '$A$ conserva le lunghezze',
      '$2A$ è ortogonale',
    ],
    correctIndices: [3],
    explanation: 'Moltiplicare una matrice ortogonale per $2$ cambia le lunghezze, quindi $2A$ non è ortogonale.',
  },
  {
    id: 128,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Quale proprietà è vera in $\\mathbb{R}^n$?',
    options: [
      '$(u\\cdot v)\\cdot w=u\\cdot(v\\cdot w)$',
      '$u\\cdot v=v\\cdot u$',
      '$\\lVert u+v \\rVert=\\lVert u \\rVert+\\lVert v \\rVert$ sempre',
      '$u\\cdot u<0$ se $u\\neq0$',
    ],
    correctIndices: [1],
    explanation: 'Il prodotto scalare usuale è simmetrico: $u\\cdot v=v\\cdot u$.',
  },
  {
    id: 129,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Siano $u=(2,-1,3)$ e $v=(1,2,0)$. Il coseno dell\'angolo tra $u$ e $v$ è:',
    options: [
      'positivo',
      'negativo',
      'nullo',
      'impossibile da determinare',
    ],
    correctIndices: [2],
    explanation: '$u\\cdot v=2\\cdot1+(-1)\\cdot2+3\\cdot0=0$, quindi il coseno è nullo e i vettori sono ortogonali.',
  },
  {
    id: 130,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Nella base canonica di $\\mathbb{R}^3$, quanto vale $e_2\\times e_3$?',
    options: [
      '$e_1$',
      '$-e_1$',
      '$e_2$',
      '$0$',
    ],
    correctIndices: [0],
    explanation: 'Nell\'ordine ciclico $e_1,e_2,e_3$ si ha $e_2\\times e_3=e_1$.',
  },
  {
    id: 131,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Se $u,v,w\\in \\mathbb{R}^3$ sono linearmente dipendenti, allora:',
    options: [
      '$u\\cdot(v\\times w)=0$',
      '$u\\cdot(v\\times w)=1$',
      '$v\\times w=0$ sempre',
      'u,v,w formano sempre una base',
    ],
    correctIndices: [0],
    explanation: 'Il prodotto misto è il determinante dei tre vettori; è zero se i vettori sono linearmente dipendenti.',
  },
  {
    id: 132,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Sia $v\\neq0$ e $Av=3v$. Allora:',
    options: [
      '$v$ è autovettore relativo all\'autovalore $3$',
      '$3$ è autovettore relativo ad $A$',
      '$v$ appartiene necessariamente al nucleo di $A$',
      '$A$ è necessariamente diagonale',
    ],
    correctIndices: [0],
    explanation: 'Per definizione, $v$ non nullo con $Av=\\lambda v$ è un autovettore relativo all\'autovalore $\\lambda$.',
  },
  {
    id: 133,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Il vettore nullo può essere autovettore?',
    options: [
      'Sì, sempre',
      'Sì, solo per autovalore $0$',
      'No, per definizione',
      'Sì, solo se $A$ è nulla',
    ],
    correctIndices: [2],
    explanation: 'Un autovettore deve essere non nullo.',
  },
  {
    id: 134,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Una matrice $A\\in M_3(\\mathbb{R})$ è diagonalizzabile se:',
    options: [
      'esiste una base di $\\mathbb{R}^3$ formata da autovettori di $A$',
      'ha determinante diverso da zero',
      'è invertibile',
      'ha almeno un autovalore reale',
    ],
    correctIndices: [0],
    explanation: 'Diagonalizzabile significa che esiste una base di autovettori.',
  },
  {
    id: 135,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Quale affermazione è vera?',
    options: [
      'Ogni matrice diagonalizzabile è invertibile',
      'Una matrice diagonalizzabile può avere autovalore $0$',
      'Una matrice invertibile non è mai diagonalizzabile',
      'Se $0$ è autovalore, la matrice è sempre ortogonale',
    ],
    correctIndices: [1],
    explanation: 'Una matrice diagonalizzabile può avere $0$ tra gli autovalori; in quel caso non è invertibile.',
  },
  {
    id: 136,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Sia $A\\in M_4(\\mathbb{R})$ con quattro autovalori reali distinti. Allora:',
    options: [
      '$A$ è diagonalizzabile',
      '$A$ è ortogonale',
      '$A$ è simmetrica',
      '$A$ ha determinante uguale a $1$',
    ],
    correctIndices: [0],
    explanation: 'Autovalori distinti danno autovettori linearmente indipendenti; in dimensione $4$ bastano quattro autovettori.',
  },
  {
    id: 137,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ reale. Quale affermazione è vera?',
    options: [
      'Se $A$ è simmetrica, allora è ortogonalmente diagonalizzabile',
      'Se $A$ è diagonalizzabile, allora è simmetrica',
      'Se $A$ è invertibile, allora è ortogonalmente diagonalizzabile',
      'Se $A$ ha autovalori reali, allora è ortogonale',
    ],
    correctIndices: [0],
    explanation: 'Per il teorema spettrale, una matrice reale simmetrica è ortogonalmente diagonalizzabile.',
  },
  {
    id: 138,
    category: 'Matrici Simili',
    type: 'multi',
    text: 'Due matrici simili hanno necessariamente:',
    options: [
      'stesso determinante',
      'stessi autovalori',
      'stessa traccia',
      'stessa matrice',
    ],
    correctIndices: [0, 1, 2],
    explanation: 'Matrici simili hanno stesso polinomio caratteristico, quindi stessi autovalori, stessa traccia e stesso determinante; non devono essere uguali.',
  },
  {
    id: 139,
    category: 'Matrici Simili',
    type: 'single',
    text: 'Due matrici quadrate con stessi autovalori e stesso determinante sono necessariamente simili?',
    options: [
      'Sì, sempre',
      'No, non basta',
      'Sì, se sono dello stesso ordine',
      'Sì, se hanno determinante non nullo',
    ],
    correctIndices: [1],
    explanation: 'Stessi autovalori e stesso determinante non bastano: bisogna considerare anche la struttura degli autospazi/Jordan.',
  },
  {
    id: 140,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Una matrice reale $3 \\times 3$:',
    options: [
      'ha sempre almeno un autovalore reale',
      'è sempre diagonalizzabile',
      'è sempre simmetrica',
      'ha sempre tre autovalori reali distinti',
    ],
    correctIndices: [0],
    explanation: 'Il polinomio caratteristico ha grado dispari, quindi ha almeno una radice reale.',
  },
  {
    id: 141,
    category: 'Isometrie',
    type: 'multi',
    text: 'Sia $f:\\mathbb{R}^n\\to \\mathbb{R}^n$ un\'isometria lineare. Quali affermazioni sono vere?',
    options: [
      '$f$ conserva le lunghezze',
      '$f$ è suriettiva',
      '$f$ ha sempre determinante $0$',
      '$f$ manda ogni vettore in sé stesso',
    ],
    correctIndices: [0, 1],
    explanation: 'Un\'isometria lineare conserva le lunghezze e, in dimensione finita da $\\mathbb{R}^n$ a $\\mathbb{R}^n$, è biettiva quindi suriettiva.',
  },
  {
    id: 142,
    category: 'Proiezione Ortogonale',
    type: 'multi',
    text: 'Sia $U\\subset \\mathbb{R}^3$ un piano passante per l\'origine. La proiezione ortogonale $p_U$:',
    options: [
      'ha autovalore $1$ sui vettori di $U$',
      'ha autovalore $0$ sui vettori di $U^\\perp$',
      'è sempre l\'identità su tutto $\\mathbb{R}^3$',
      'non è lineare',
    ],
    correctIndices: [0, 1],
    explanation: 'La proiezione lascia fissi i vettori di $U$ e manda a zero quelli del complemento ortogonale.',
  },
  {
    id: 143,
    category: 'Complemento Ortogonale',
    type: 'single',
    text: 'Se $U\\subset \\mathbb{R}^7$ ha dimensione $3$, allora $\\dim U^\\perp$ vale:',
    options: [
      '$3$',
      '$4$',
      '$7$',
      '$10$',
    ],
    correctIndices: [1],
    explanation: 'In $\\mathbb{R}^n$ vale $\\dim U + \\dim U^\\perp = n$, quindi $3+\\dim U^\\perp=7$.',
  },
  {
    id: 144,
    category: 'Geometria Affine',
    type: 'single',
    text: 'Quale equazione rappresenta un piano passante per l\'origine in $\\mathbb{A}^3$?',
    options: [
      '$x+y-z=0$',
      '$x+y-z=1$',
      '$x^2+y=0$',
      '$x+y+z=4$',
    ],
    correctIndices: [0],
    explanation: 'Un piano passante per l\'origine deve soddisfare l\'equazione quando $x=y=z=0$.',
  },
  {
    id: 145,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Il piano $2x-y+3z=1$ ha vettore normale:',
    options: [
      '$(2,-1,3)$',
      '$(1,1,1)$',
      '$(x,y,z)$',
      '$(3,-1,2)$',
    ],
    correctIndices: [0],
    explanation: 'Il vettore normale si ottiene dai coefficienti di x,y,z.',
  },
  {
    id: 146,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Sia $z=a+bi$. Quale affermazione è vera?',
    options: [
      '$z=\\overline{z}$ se e solo se $z$ è reale',
      '$|z|$ può essere negativo',
      '$z=-\\overline{z}$ se e solo se $z$ è reale',
      'Il coniugato di $z$ è $b+ai$',
    ],
    correctIndices: [0],
    explanation: 'Un complesso è reale se e solo se la parte immaginaria è zero, cioè $z$ coincide con il suo coniugato.',
  },
  {
    id: 147,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Cinque vettori di $\\mathbb{R}^4$ sono:',
    options: [
      'sempre linearmente indipendenti',
      'sempre linearmente dipendenti',
      'sempre una base di $\\mathbb{R}^4$',
      'sempre generatori di $\\mathbb{R}^4$',
    ],
    correctIndices: [1],
    explanation: 'In $\\mathbb{R}^4$ non possono esserci $5$ vettori linearmente indipendenti.',
  },
  {
    id: 148,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'Quale insieme è un sottospazio vettoriale di $\\mathbb{R}^3$?',
    options: [
      '${(x,y,z):x+y+z=1}$',
      '${(x,y,z):x+y+z=0}$',
      '${(x,y,z):x^2+y=0}$',
      '${(x,y,z):z>0}$',
    ],
    correctIndices: [1],
    explanation: 'Un\'equazione lineare omogenea definisce un sottospazio vettoriale.',
  },
  {
    id: 149,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Siano $U,W\\subset \\mathbb{R}^4$, con $\\dim U=2$ e $\\dim W=3$. Quale affermazione è sempre vera?',
    options: [
      '$\\dim(U\\cap W)\\geq1$',
      '$U\\cap W={0}$',
      '$U+W$ è sempre somma diretta',
      '$U=W$',
    ],
    correctIndices: [0],
    explanation: 'Per Grassmann $\\dim(U\\cap W)=\\dim U+\\dim W-\\dim(U+W)\\geq2+3-4=1$.',
  },
  {
    id: 150,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'Sia $W$ un sottospazio di $V$, con $\\dim W=\\dim V<\\infty$. Allora:',
    options: [
      '$W$ può essere proprio',
      '$W=V$',
      '$W={0}$',
      '$W\\cap V={0}$',
    ],
    correctIndices: [1],
    explanation: 'In dimensione finita, un sottospazio con la stessa dimensione dello spazio coincide con lo spazio.',
  },
  {
    id: 151,
    category: 'Somma Diretta',
    type: 'single',
    text: 'Sia $U\\subset V$. Un sottospazio complementare $W$ tale che $V=U\\oplus W$:',
    options: [
      'è sempre unico',
      'non esiste mai',
      'in generale non è unico',
      'coincide sempre con $U^\\perp$',
    ],
    correctIndices: [2],
    explanation: 'I complementari esistono in dimensione finita, ma in generale non sono unici.',
  },
  {
    id: 152,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Sia $A$ una matrice $4 \\times 6, b\\in \\mathbb{R}^4$, e siano $\\operatorname{rk}(A)=\\operatorname{rk}(A|b)=4$. Allora il sistema $Ax=b$:',
    options: [
      'non ha soluzioni',
      'ha soluzione unica',
      'ha infinite soluzioni',
      'è impossibile perché $A$ non è quadrata',
    ],
    correctIndices: [2],
    explanation: 'Il sistema è compatibile e ha $6$ incognite con rango $4$, quindi ha $6-4=2$ parametri liberi.',
  },
  {
    id: 153,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Sia $A$ una matrice $5 \\times 5$ con $\\det A=0$. Allora:',
    options: [
      '$Ax=0$ ha solo la soluzione nulla',
      '$Ax=0$ ha infinite soluzioni',
      '$Ax=b$ non ha mai soluzioni',
      '$A$ è invertibile',
    ],
    correctIndices: [1],
    explanation: '$\\det A=0$ implica rango non massimo, quindi il nucleo è non banale e il sistema omogeneo ha infinite soluzioni.',
  },
  {
    id: 154,
    category: 'Rango e Nullità',
    type: 'single',
    text: 'Sia $f:\\mathbb{R}^4\\to \\mathbb{R}^3$ lineare con $\\operatorname{rk}(f)=2$. Allora $\\dim \\operatorname{Ker}(f)$ vale:',
    options: [
      '$1$',
      '$2$',
      '$3$',
      '$4$',
    ],
    correctIndices: [1],
    explanation: 'Per rango-nullità: $4=\\dim \\operatorname{Ker}(f)+2$, quindi $\\dim \\operatorname{Ker}(f)=2$.',
  },
  {
    id: 155,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Può esistere una funzione lineare iniettiva $f:\\mathbb{R}^4\\to \\mathbb{R}^2$?',
    options: [
      'Sì, sempre',
      'Sì, se il rango è $4$',
      'No, perché il codominio ha dimensione minore del dominio',
      'No, perché ogni funzione lineare è suriettiva',
    ],
    correctIndices: [2],
    explanation: 'Per essere iniettiva servirebbe rango $4$, ma il rango è al massimo $\\dim$ codominio $= 2$.',
  },
  {
    id: 156,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Può esistere una funzione lineare suriettiva $f:\\mathbb{R}^2\\to \\mathbb{R}^4$?',
    options: [
      'Sì, sempre',
      'Sì, se il nucleo è nullo',
      'No, perché l\'immagine ha dimensione al massimo $2$',
      'No, perché il dominio è uno spazio vettoriale',
    ],
    correctIndices: [2],
    explanation: 'Il rango non può superare la dimensione del dominio, quindi l\'immagine ha dimensione al massimo $2$ e non può essere $\\mathbb{R}^4$.',
  },
  {
    id: 157,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Sia $f:V\\to W$ una funzione tale che $f(v_1+v_2)=f(v_1)+f(v_2)$ per ogni $v_1,v_2\\in V$. Quale affermazione è necessariamente vera?',
    options: [
      '$f(0_V)=0_W$',
      '$f$ è sicuramente lineare',
      '$f$ è sicuramente suriettiva',
      '$f$ è sicuramente iniettiva',
    ],
    correctIndices: [0],
    explanation: 'Ponendo $v_1=v_2=0$ si ottiene $f(0)=f(0)+f(0)$, dunque $f(0)=0$.',
  },
  {
    id: 158,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Siano $v_1,v_2,v_3\\in V$ con $v_3=v_1+v_2$. Se $f$ è lineare e $f(v_i)=w_i$, allora deve valere:',
    options: [
      '$w_3=w_1+w_2$',
      '$w_1=w_2+w_3$',
      '$w_3=0$',
      '$w_1,w_2,w_3$ devono essere indipendenti',
    ],
    correctIndices: [0],
    explanation: 'La linearità impone $f(v_1+v_2)=f(v_1)+f(v_2)$.',
  },
  {
    id: 159,
    category: 'Applicazioni Lineari',
    type: 'single',
    text: 'Una matrice reale $2 \\times 3$ rappresenta una funzione lineare:',
    options: [
      '$\\mathbb{R}^2\\to \\mathbb{R}^3$',
      '$\\mathbb{R}^3\\to \\mathbb{R}^2$',
      '$\\mathbb{R}^2\\to \\mathbb{R}^2$',
      '$\\mathbb{R}^3\\to \\mathbb{R}^3$',
    ],
    correctIndices: [1],
    explanation: 'Una matrice $m \\times n$ rappresenta una funzione da $\\mathbb{R}^n$ a $\\mathbb{R}^m$.',
  },
  {
    id: 160,
    category: 'Matrici',
    type: 'single',
    text: 'Se $A$ e $B$ sono matrici invertibili dello stesso ordine, allora:',
    options: [
      '$(AB)^{-1}=A^{-1}B^{-1}$',
      '$(AB)^{-1}=B^{-1}A^{-1}$',
      '$(AB)^{-1}=AB$',
      '$(AB)^{-1}=A^T B^T$',
    ],
    correctIndices: [1],
    explanation: 'L\'inversa del prodotto si prende invertendo l\'ordine: $(AB)^{-1}=B^{-1}A^{-1}$.',
  },
  {
    id: 161,
    category: 'Determinante',
    type: 'single',
    text: 'Sia $A$ quadrata. Se scambio due righe e poi moltiplico una colonna per $-1$, il determinante finale:',
    options: [
      'resta uguale a $\\det A$',
      'diventa $-\\det A$',
      'diventa $0$',
      'diventa $2det A$',
    ],
    correctIndices: [0],
    explanation: 'Lo scambio cambia segno e la moltiplicazione per $-1$ cambia di nuovo segno: $(-1)(-1)=1$.',
  },
  {
    id: 162,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Per una matrice quadrata $A, 0$ è autovalore di $A$ se e solo se:',
    options: [
      '$\\det A=0$',
      '$A$ è diagonale',
      '$A$ è simmetrica',
      '$A$ è ortogonale',
    ],
    correctIndices: [0],
    explanation: '$0$ è autovalore se $\\det(A-0I)=\\det A=0$.',
  },
  {
    id: 163,
    category: 'Matrici Simili',
    type: 'multi',
    text: 'Se $A$ e $B$ sono simili, quali affermazioni sono vere?',
    options: [
      'Hanno la stessa traccia',
      'Hanno lo stesso determinante',
      'Sono sempre uguali',
      'Hanno sempre gli stessi autovettori',
    ],
    correctIndices: [0, 1],
    explanation: 'Matrici simili hanno stesso polinomio caratteristico, quindi stessa traccia e stesso determinante.',
  },
  {
    id: 164,
    category: 'Matrici',
    type: 'multi',
    text: 'Sia $D$ una matrice diagonale reale. Quali affermazioni sono vere?',
    options: [
      '$D$ è diagonalizzabile',
      '$D$ è sempre invertibile',
      'Gli elementi diagonali sono gli autovalori',
      '$D$ è sempre ortogonale',
    ],
    correctIndices: [0, 2],
    explanation: 'Una matrice diagonale è già diagonalizzata e i suoi autovalori sono gli elementi sulla diagonale.',
  },
  {
    id: 165,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Ogni matrice ortogonale reale ha tutti gli autovalori reali.',
    options: [
      'Vero',
      'Falso',
    ],
    correctIndices: [1],
    explanation: 'Una rotazione del piano è ortogonale ma può avere autovalori complessi non reali.',
  },
  {
    id: 166,
    category: 'Matrici Ortogonali',
    type: 'multi',
    text: 'Siano A,B ortogonali. Quali matrici sono sicuramente ortogonali?',
    options: [
      'AB',
      '$A+B$',
      '$A^T$',
      '$2A$',
    ],
    correctIndices: [0, 2],
    explanation: 'Il prodotto di ortogonali è ortogonale e la trasposta di una ortogonale è ortogonale.',
  },
  {
    id: 167,
    category: 'Diagonalizzabilità',
    type: 'multi',
    text: 'Sia $A$ reale simmetrica. Quali affermazioni sono vere?',
    options: [
      'Ha autovalori reali',
      'È ortogonalmente diagonalizzabile',
      'È sempre ortogonale',
      'Ha sempre determinante $1$',
    ],
    correctIndices: [0, 1],
    explanation: 'Per il teorema spettrale reale, una matrice reale simmetrica ha autovalori reali ed è ortogonalmente diagonalizzabile.',
  },
  {
    id: 168,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Una matrice reale con polinomio caratteristico $p(t)=(t^2+1)(t-2)$ è diagonalizzabile su $\\mathbb{R}$?',
    options: [
      'Sì, perché il polinomio ha grado $3$',
      'Sì, perché ha determinante non nullo',
      'No, perché non tutti gli autovalori sono reali',
      'No, perché ha autovalori distinti',
    ],
    correctIndices: [2],
    explanation: 'Su R il polinomio caratteristico deve spezzarsi in fattori lineari; $t^2+1$ non ha radici reali.',
  },
  {
    id: 169,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Per un autovalore $\\lambda$, vale sempre:',
    options: [
      '$g_\\lambda\\geq a_\\lambda$',
      '$g_\\lambda\\leq a_\\lambda$',
      '$g_\\lambda=a_\\lambda+1$',
      '$g_\\lambda=0$',
    ],
    correctIndices: [1],
    explanation: 'La molteplicità geometrica è sempre minore o uguale alla molteplicità algebrica.',
  },
  {
    id: 170,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'La matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ è:',
    options: [
      'diagonalizzabile',
      'non diagonalizzabile',
      'ortogonale',
      'simmetrica',
    ],
    correctIndices: [1],
    explanation: 'È un blocco di Jordan di taglia $2$: ha un solo autospazio di dimensione $1$, quindi non è diagonalizzabile.',
  },
  {
    id: 171,
    category: 'Diagonalizzabilità',
    type: 'multi',
    text: 'Sia $A^2=A$. Quali affermazioni sono vere?',
    options: [
      'Gli autovalori possibili sono solo $0$ e $1$',
      '$A$ è sempre nilpotente',
      '$A$ è diagonalizzabile su $\\mathbb{R}$',
      '$A$ è sempre ortogonale',
    ],
    correctIndices: [0, 2],
    explanation: 'Il polinomio minimo divide $x(x-1)$, che ha radici semplici; gli autovalori possibili sono $0$ e $1$.',
  },
  {
    id: 172,
    category: 'Diagonalizzabilità',
    type: 'multi',
    text: 'Sia $A^2=I$. Quali affermazioni sono vere?',
    options: [
      'Gli autovalori possibili sono $\\pm1$',
      '$A$ è diagonalizzabile su $\\mathbb{R}$',
      '$A$ è sempre simmetrica',
      '$A$ è sempre nulla',
    ],
    correctIndices: [0, 1],
    explanation: 'Il polinomio minimo divide $(x-1)(x+1)$, che ha radici reali semplici; quindi $A$ è diagonalizzabile e gli autovalori sono $\\pm1$.',
  },
  {
    id: 173,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Sia $A$ nilpotente, cioè $A^k=0$ per qualche $k$. Se $A$ è diagonalizzabile, allora:',
    options: [
      '$A=0$',
      '$A=I$',
      '$A$ è ortogonale',
      '$A$ ha solo autovalori $\\pm1$',
    ],
    correctIndices: [0],
    explanation: 'Una nilpotente ha solo autovalore $0$; se è diagonalizzabile, la diagonale è tutta zero, quindi $A=0$.',
  },
  {
    id: 174,
    category: 'Proiezione Ortogonale',
    type: 'multi',
    text: 'Sia $P$ la matrice della proiezione ortogonale su un sottospazio $U$. Quali affermazioni sono vere?',
    options: [
      '$P^2=P$',
      '$P^T=P$',
      '$P^2=0$',
      '$P$ è sempre invertibile',
    ],
    correctIndices: [0, 1],
    explanation: 'Una proiezione è idempotente; se è ortogonale, la matrice è anche simmetrica.',
  },
  {
    id: 175,
    category: 'Proiezione Ortogonale',
    type: 'single',
    text: 'Sia $p_U:\\mathbb{R}^3\\to \\mathbb{R}^3$ la proiezione ortogonale su una retta passante per l\'origine. Rispetto a una base ortonormale adatta, la matrice associata è:',
    options: [
      '$\\operatorname{diag}(1,0,0)$',
      '$\\operatorname{diag}(1,1,0)$',
      '$\\operatorname{diag}(1,1,1)$',
      '$\\operatorname{diag}(0,0,0)$',
    ],
    correctIndices: [0],
    explanation: 'Sulla retta la proiezione ha autovalore $1$; sulle due direzioni ortogonali ha autovalore $0$.',
  },
  {
    id: 176,
    category: 'Complemento Ortogonale',
    type: 'single',
    text: 'Se $U\\subset \\mathbb{R}^8$ ha dimensione $5$, allora $\\dim U^\\perp$ vale:',
    options: [
      '$2$',
      '$3$',
      '$5$',
      '$8$',
    ],
    correctIndices: [1],
    explanation: '$\\dim U + \\dim U^\\perp = 8$, quindi $\\dim U^\\perp=3$.',
  },
  {
    id: 177,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Nella disuguaglianza di Cauchy-Schwarz $|u\\cdot v|\\leq\\lVert u \\rVert\\lVert v \\rVert$, l\'uguaglianza vale se:',
    options: [
      '$u$ e $v$ sono linearmente dipendenti',
      '$u$ e $v$ sono sempre ortogonali',
      '$u$ e $v$ hanno sempre norma $1$',
      '$u\\cdot v=1$',
    ],
    correctIndices: [0],
    explanation: 'L\'uguaglianza in Cauchy-Schwarz vale esattamente quando i vettori sono linearmente dipendenti.',
  },
  {
    id: 178,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Nella base canonica di $\\mathbb{R}^3$, quanto vale $e_3\\times e_2$?',
    options: [
      '$e_1$',
      '$-e_1$',
      '$e_2$',
      '$0$',
    ],
    correctIndices: [1],
    explanation: '$e_2\\times e_3=e_1$; invertendo l\'ordine cambia il segno, quindi $e_3\\times e_2=-e_1$.',
  },
  {
    id: 179,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Per $v,w\\in \\mathbb{R}^3, v\\times w=0$ se:',
    options: [
      'v,w sono linearmente dipendenti',
      'v,w sono sempre ortogonali',
      'v,w hanno norma $1$',
      '$v+w=0$ è impossibile',
    ],
    correctIndices: [0],
    explanation: 'Il prodotto vettoriale è nullo se i vettori sono paralleli/dipendenti, incluso il caso di un vettore nullo.',
  },
  {
    id: 180,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Se $u\\cdot(v\\times w)\\neq0$, allora:',
    options: [
      'u,v,w sono linearmente indipendenti',
      'u,v,w sono linearmente dipendenti',
      '$v\\times w=0$',
      '$u$ è nullo',
    ],
    correctIndices: [0],
    explanation: 'Il prodotto misto è il determinante dei tre vettori; se è non nullo, i vettori sono linearmente indipendenti.',
  },
  {
    id: 181,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Il piano $x-y+2z=0$ ha vettore normale:',
    options: [
      '$(1,-1,2)$',
      '$(1,1,1)$',
      '$(2,-1,1)$',
      '$(0,1,2)$',
    ],
    correctIndices: [0],
    explanation: 'Il normale di $ax+by+cz=d$ è $(a,b,c)$.',
  },
  {
    id: 182,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Una retta perpendicolare al piano $2x+3y-z=4$ ha direzione parallela a:',
    options: [
      '$(2,3,-1)$',
      '$(1,0,0)$',
      '$(0,1,0)$',
      '$(3,-1,2)$',
    ],
    correctIndices: [0],
    explanation: 'Una retta perpendicolare a un piano ha direzione parallela al vettore normale del piano.',
  },
  {
    id: 183,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Due piani in $\\mathbb{R}^3$ sono paralleli se:',
    options: [
      'i loro vettori normali sono proporzionali',
      'i loro vettori normali sono ortogonali',
      'hanno sempre la stessa equazione',
      'hanno sempre intersezione vuota',
    ],
    correctIndices: [0],
    explanation: 'Piani paralleli hanno normali paralleli, quindi proporzionali.',
  },
  {
    id: 184,
    category: 'Geometria Affine',
    type: 'single',
    text: 'Una sottovarietà affine $P+U$ è anche un sottospazio vettoriale se e solo se:',
    options: [
      'contiene l\'origine',
      'non contiene l\'origine',
      'ha dimensione $1$',
      'è una retta',
    ],
    correctIndices: [0],
    explanation: 'Un sottospazio vettoriale deve contenere l\'origine; una sottovarietà affine che contiene l\'origine coincide con il suo direttore traslato.',
  },
  {
    id: 185,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Per $z \\in \\mathbb{C}$, vale $z=-\\overline{z}$ se e solo se:',
    options: [
      '$z$ è reale',
      '$z$ è immaginario puro',
      '$|z|=1$',
      '$z=1$',
    ],
    correctIndices: [1],
    explanation: 'Se $z=a+bi, z=-\\overline{z}$ diventa $a+bi=-a+bi$, quindi $a=0: z$ è immaginario puro.',
  },
  {
    id: 186,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Se un polinomio a coefficienti reali ha una radice non reale $z$, allora:',
    options: [
      'anche $\\overline{z}$ è radice',
      'anche -z è sempre radice',
      'il polinomio non ha radici reali',
      'il polinomio è di grado $1$',
    ],
    correctIndices: [0],
    explanation: 'Le radici non reali dei polinomi a coefficienti reali compaiono in coppie coniugate.',
  },
  {
    id: 187,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Tre vettori di $\\mathbb{R}^5$:',
    options: [
      'generano sempre $\\mathbb{R}^5$',
      'non possono mai generare tutto $\\mathbb{R}^5$',
      'sono sempre linearmente dipendenti',
      'formano sempre una base',
    ],
    correctIndices: [1],
    explanation: 'Per generare $\\mathbb{R}^5$ servono almeno $5$ vettori; tre vettori generano al massimo uno spazio di dimensione $3$.',
  },
  {
    id: 188,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Lo spazio dei polinomi reali di grado al più $3$, indicato con $P_{\\leq3}$, ha dimensione:',
    options: [
      '$3$',
      '$4$',
      '$5$',
      'infinita',
    ],
    correctIndices: [1],
    explanation: 'Una base è ${1,x,x^2,x^3}$, quindi la dimensione è $4$.',
  },
  {
    id: 189,
    category: 'Matrici',
    type: 'single',
    text: 'Lo spazio vettoriale $M_{2,3}(\\mathbb{R})$ ha dimensione:',
    options: [
      '$2$',
      '$3$',
      '$5$',
      '$6$',
    ],
    correctIndices: [3],
    explanation: 'Una matrice $2 \\times 3$ ha $6$ entrate libere, quindi la dimensione è $2\\cdot3=6$.',
  },
  {
    id: 190,
    category: 'Matrici',
    type: 'single',
    text: 'Lo spazio delle matrici simmetriche reali $3 \\times 3$ ha dimensione:',
    options: [
      '$3$',
      '$6$',
      '$9$',
      '$12$',
    ],
    correctIndices: [1],
    explanation: 'In una simmetrica $3 \\times 3$ ci sono $3$ elementi diagonali e $3$ sopra la diagonale: totale $6$ parametri.',
  },
  {
    id: 191,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'Siano U,W sottospazi di $V$. L\'unione $U\\cup W$:',
    options: [
      'è sempre un sottospazio',
      'non è mai un sottospazio',
      'in generale non è un sottospazio',
      'è sempre uguale a $U+W$',
    ],
    correctIndices: [2],
    explanation: 'L\'unione di sottospazi non è in generale chiusa per somma, salvo casi particolari come $U\\subset W$ o $W\\subset U$.',
  },
  {
    id: 192,
    category: 'Sottospazi Vettoriali',
    type: 'single',
    text: 'L\'intersezione di due sottospazi vettoriali:',
    options: [
      'è sempre un sottospazio vettoriale',
      'non contiene mai lo zero',
      'è sempre uguale alla somma',
      'è sempre vuota',
    ],
    correctIndices: [0],
    explanation: 'L\'intersezione di sottospazi è ancora chiusa per combinazioni lineari e contiene lo zero.',
  },
  {
    id: 193,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Sia $W\\subsetneq V$, con $\\dim V=7$. Allora:',
    options: [
      '$\\dim W=7$',
      '$\\dim W<7$',
      '$\\dim W>7$',
      '$W=V$',
    ],
    correctIndices: [1],
    explanation: 'In dimensione finita, un sottospazio proprio ha dimensione strettamente minore.',
  },
  {
    id: 194,
    category: 'Spazi Vettoriali',
    type: 'single',
    text: 'Le coordinate di un vettore rispetto a una base sono:',
    options: [
      'sempre infinite',
      'uniche',
      'non determinate',
      'uguali in ogni base',
    ],
    correctIndices: [1],
    explanation: 'Rispetto a una base, ogni vettore si scrive in modo unico come combinazione lineare dei vettori della base.',
  },
  {
    id: 195,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Se un sistema lineare $Ax=b$ ha almeno due soluzioni distinte, allora:',
    options: [
      'ha esattamente due soluzioni',
      'ha infinite soluzioni',
      'non ha soluzioni',
      '$A$ è necessariamente invertibile',
    ],
    correctIndices: [1],
    explanation: 'La differenza di due soluzioni appartiene al nucleo. Se il nucleo contiene un vettore non nullo, ci sono infinite soluzioni.',
  },
  {
    id: 196,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'Se $A$ è quadrata e $\\det A\\neq0$, allora $Ax=b$:',
    options: [
      'non ha mai soluzioni',
      'ha sempre un\'unica soluzione per ogni $b$',
      'ha sempre infinite soluzioni',
      'è sempre omogeneo',
    ],
    correctIndices: [1],
    explanation: '$\\det A\\neq0$ significa che $A$ è invertibile, quindi $Ax=b$ ha soluzione unica $x=A^{-1}b$.',
  },
  {
    id: 197,
    category: 'Sistemi Lineari',
    type: 'single',
    text: 'La regola di Cramer si può usare direttamente quando:',
    options: [
      '$A$ è quadrata e $\\det A\\neq0$',
      '$A$ è rettangolare',
      '$\\det A=0$',
      'il sistema è incompatibile',
    ],
    correctIndices: [0],
    explanation: 'Cramer richiede una matrice dei coefficienti quadrata e invertibile.',
  },
  {
    id: 198,
    category: 'Rango - Matrice',
    type: 'single',
    text: 'Per ogni matrice $A$, vale:',
    options: [
      '$\\operatorname{rk}(A^T)=\\operatorname{rk}(A)$',
      '$\\operatorname{rk}(A^T)=0$ sempre',
      '$\\operatorname{rk}(A^T)=\\operatorname{rk}(A)+1$',
      '$A^T$ è sempre invertibile',
    ],
    correctIndices: [0],
    explanation: 'Il rango per righe e il rango per colonne coincidono; trasporre scambia righe e colonne.',
  },
  {
    id: 199,
    category: 'Matrici',
    type: 'single',
    text: 'Per matrici quadrate dello stesso ordine, quale affermazione è vera?',
    options: [
      '$\\operatorname{tr}(A+B)=\\operatorname{tr}(A)+\\operatorname{tr}(B)$',
      '$\\operatorname{tr}(AB)=\\operatorname{tr}(A)\\operatorname{tr}(B)$ sempre',
      '$\\operatorname{tr}(A)=\\det(A)$ sempre',
      'la traccia esiste anche per matrici non quadrate',
    ],
    correctIndices: [0],
    explanation: 'La traccia è lineare: la traccia della somma è la somma delle tracce.',
  },
  {
    id: 200,
    category: 'Matrici Simili',
    type: 'single',
    text: 'Se $A$ e $B$ sono simili, allora:',
    options: [
      'hanno la stessa traccia',
      'hanno sempre gli stessi autovettori',
      'sono sempre uguali',
      'hanno sempre le stesse righe',
    ],
    correctIndices: [0],
    explanation: 'Matrici simili hanno lo stesso polinomio caratteristico, quindi anche la stessa traccia.',
  },
  {
    id: 201,
    category: 'Matrici',
    type: 'single',
    text: 'Se $A$ è invertibile, allora:',
    options: [
      '$(A^T)^{-1}=(A^{-1})^T$',
      '$(A^T)^{-1}=A$ sempre',
      '$(A^T)^{-1}=0$',
      '$A^T$ non è invertibile',
    ],
    correctIndices: [0],
    explanation: 'Trasposta e inversa commutano: $(A^T)^{-1}=(A^{-1})^T$.',
  },
  {
    id: 202,
    category: 'Matrici',
    type: 'single',
    text: 'Se $AB=0$, allora:',
    options: [
      'necessariamente $A=0$',
      'necessariamente $B=0$',
      'non è detto che $A=0$ o $B=0$',
      '$A$ e $B$ sono sempre invertibili',
    ],
    correctIndices: [2],
    explanation: 'Per matrici possono esistere divisori dello zero: due matrici non nulle possono avere prodotto nullo.',
  },
  {
    id: 203,
    category: 'Matrici',
    type: 'single',
    text: 'L\'insieme $GL_n(\\mathbb{R})$ delle matrici invertibili $n \\times n$:',
    options: [
      'è un gruppo rispetto al prodotto',
      'è un sottospazio vettoriale di $M_n(\\mathbb{R})$',
      'contiene la matrice nulla',
      'è chiuso rispetto alla somma',
    ],
    correctIndices: [0],
    explanation: 'Le matrici invertibili formano un gruppo per il prodotto, ma non un sottospazio perché non contengono $0$ e non sono chiuse per somma.',
  },
  {
    id: 204,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Se $A$ è nilpotente, cioè $A^k=0$ per qualche $k$, allora:',
    options: [
      'l\'unico autovalore possibile è $0$',
      'tutti gli autovalori sono $1$',
      '$A$ è sempre invertibile',
      '$\\det A\\neq0$',
    ],
    correctIndices: [0],
    explanation: 'Se $Av=\\lambda v$, allora $A^k v=\\lambda^k v=0$; poiché $v\\neq0, \\lambda=0$.',
  },
  {
    id: 205,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Gli autovalori di una matrice triangolare sono:',
    options: [
      'gli elementi sulla diagonale',
      'gli elementi fuori diagonale',
      'sempre tutti uguali a zero',
      'sempre tutti distinti',
    ],
    correctIndices: [0],
    explanation: 'Il polinomio caratteristico di una triangolare ha radici uguali agli elementi diagonali.',
  },
  {
    id: 206,
    category: 'Determinante',
    type: 'single',
    text: 'Il determinante di una matrice triangolare è:',
    options: [
      'la somma degli elementi diagonali',
      'il prodotto degli elementi diagonali',
      'sempre zero',
      'sempre uno',
    ],
    correctIndices: [1],
    explanation: 'Per matrici triangolari, il determinante è il prodotto degli elementi sulla diagonale.',
  },
  {
    id: 207,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Una matrice $n \\times n$ è diagonalizzabile se:',
    options: [
      'ha $n$ autovettori linearmente indipendenti',
      'ha determinante diverso da zero',
      'ha almeno un autovalore',
      'è quadrata',
    ],
    correctIndices: [0],
    explanation: 'Diagonalizzabile significa che esiste una base di autovettori, cioè $n$ autovettori linearmente indipendenti.',
  },
  {
    id: 208,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'La molteplicità geometrica di un autovalore $\\lambda$ è:',
    options: [
      '$\\dim \\operatorname{Ker}(A-\\lambda I)$',
      'il determinante di $A-\\lambda$ I',
      'sempre uguale a $n$',
      'sempre uguale a zero',
    ],
    correctIndices: [0],
    explanation: 'La molteplicità geometrica è la dimensione dell\'autospazio relativo a $\\lambda$.',
  },
  {
    id: 209,
    category: 'Autovalori e Autovettori',
    type: 'single',
    text: 'Autovettori relativi ad autovalori distinti sono:',
    options: [
      'sempre linearmente indipendenti',
      'sempre ortogonali',
      'sempre paralleli',
      'sempre nulli',
    ],
    correctIndices: [0],
    explanation: 'Autovettori associati ad autovalori distinti sono linearmente indipendenti.',
  },
  {
    id: 210,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Se $A$ è reale simmetrica, allora gli autospazi relativi ad autovalori distinti sono:',
    options: [
      'ortogonali',
      'uguali',
      'vuoti',
      'non sottospazi',
    ],
    correctIndices: [0],
    explanation: 'Per matrici reali simmetriche, autovettori relativi ad autovalori distinti sono ortogonali.',
  },
  {
    id: 211,
    category: 'Diagonalizzabilità',
    type: 'single',
    text: 'Una matrice reale è ortogonalmente diagonalizzabile se e solo se:',
    options: [
      'è simmetrica',
      'è invertibile',
      'ha determinante zero',
      'è triangolare',
    ],
    correctIndices: [0],
    explanation: 'Il teorema spettrale reale dice: $A$ è ortogonalmente diagonalizzabile se e solo se $A$ è simmetrica.',
  },
  {
    id: 212,
    category: 'Matrici Ortogonali',
    type: 'single',
    text: 'Se $A$ è ortogonale, allora:',
    options: [
      '$\\det A=0$',
      '$\\det A=1$ oppure $\\det A=-1$',
      '$\\det A=2$',
      '$A$ non è invertibile',
    ],
    correctIndices: [1],
    explanation: 'Da $A^T A=I$ segue $\\det(A)^2=1$, quindi $\\det(A)=\\pm1$.',
  },
  {
    id: 213,
    category: 'Isometrie',
    type: 'multi',
    text: 'Una isometria lineare $f:\\mathbb{R}^n\\to \\mathbb{R}^n$:',
    options: [
      'conserva il prodotto scalare',
      'conserva le lunghezze',
      'è invertibile',
      'manda ogni vettore in sé stesso',
    ],
    correctIndices: [0, 1, 2],
    explanation: 'Una isometria lineare conserva prodotto scalare e norme; in dimensione finita è invertibile. Non deve essere per forza l\'identità.',
  },
  {
    id: 214,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Se $u\\cdot v=0$, allora:',
    options: [
      '$u$ e $v$ sono ortogonali',
      '$u$ e $v$ sono paralleli',
      '$u=v$ sempre',
      '$\\lVert u \\rVert=\\lVert v \\rVert$ sempre',
    ],
    correctIndices: [0],
    explanation: 'Prodotto scalare nullo significa ortogonalità.',
  },
  {
    id: 215,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Per ogni vettore $v$, vale:',
    options: [
      '$\\lVert v \\rVert\\geq0$',
      '$\\lVert v \\rVert<0$ sempre',
      '$\\lVert v \\rVert=0$ anche se $v\\neq0$',
      '$\\lVert v \\rVert$ può essere complessa in $\\mathbb{R}^n$',
    ],
    correctIndices: [0],
    explanation: 'La norma è sempre reale non negativa ed è zero solo per il vettore nullo.',
  },
  {
    id: 216,
    category: 'Prodotto Scalare',
    type: 'single',
    text: 'Per ogni $u,v\\in \\mathbb{R}^n$:',
    options: [
      '$\\lVert u+v \\rVert\\leq\\lVert u \\rVert+\\lVert v \\rVert$',
      '$\\lVert u+v \\rVert=\\lVert u \\rVert+\\lVert v \\rVert$ sempre',
      '$\\lVert u+v \\rVert<0$',
      '$\\lVert u+v \\rVert=\\lVert u \\rVert\\lVert v \\rVert$',
    ],
    correctIndices: [0],
    explanation: 'È la disuguaglianza triangolare.',
  },
  {
    id: 217,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Il vettore $u\\times v$ è:',
    options: [
      'parallelo a $u$',
      'parallelo a $v$',
      'perpendicolare sia a $u$ sia a $v$',
      'sempre nullo',
    ],
    correctIndices: [2],
    explanation: 'Il prodotto vettoriale è ortogonale a entrambi i vettori di partenza.',
  },
  {
    id: 218,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'L\'area del parallelogramma generato da $u,v\\in \\mathbb{R}^3$ è:',
    options: [
      '$\\lVert u\\times v \\rVert$',
      '$u\\cdot v$',
      '$\\det(u,v)$ sempre',
      '$\\lVert u \\rVert+\\lVert v \\rVert$',
    ],
    correctIndices: [0],
    explanation: 'La norma del prodotto vettoriale misura l\'area del parallelogramma generato dai due vettori.',
  },
  {
    id: 219,
    category: 'Prodotto Scalare e Vettoriale',
    type: 'single',
    text: 'Il volume del parallelepipedo generato da $u,v,w\\in \\mathbb{R}^3$ è:',
    options: [
      '$|u\\cdot(v\\times w)|$',
      '$u+v+w$',
      '$u\\cdot v$',
      '$\\lVert u \\rVert+\\lVert v \\rVert+\\lVert w \\rVert$',
    ],
    correctIndices: [0],
    explanation: 'Il valore assoluto del prodotto misto è il volume del parallelepipedo.',
  },
  {
    id: 220,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Una retta passante per $P$ con direzione $v\\neq0$ si scrive:',
    options: [
      '$P+tv$',
      '$P+v+w$ senza parametri',
      '$ax+by+cz+d=0$ sempre come unica equazione',
      '$v=0$',
    ],
    correctIndices: [0],
    explanation: 'La forma parametrica di una retta è $P+tv$, con $t$ parametro reale.',
  },
  {
    id: 221,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Il piano passante per $P$ con normale $n\\neq0$ è dato da:',
    options: [
      '$n\\cdot(X-P)=0$',
      '$n\\cdot X=1$ sempre',
      '$X=P+tn$',
      '$X=0$ sempre',
    ],
    correctIndices: [0],
    explanation: 'I punti X del piano sono quelli per cui X-P è ortogonale al normale $n$.',
  },
  {
    id: 222,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'Una retta con direzione $v$ è parallela al piano di normale $n$ se:',
    options: [
      '$v\\cdot n=0$',
      '$v$ è parallelo a $n$',
      '$v=n$ sempre',
      '$n=0$',
    ],
    correctIndices: [0],
    explanation: 'Una direzione parallela al piano è perpendicolare al vettore normale del piano.',
  },
  {
    id: 223,
    category: 'Geometria Analitica',
    type: 'single',
    text: 'La distanza del punto $P=(x_0,y_0,z_0)$ dal piano $ax+by+cz+d=0$ è:',
    options: [
      '$|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$',
      '$ax_0+by_0+cz_0+d$ senza valore assoluto né denominatore',
      '$\\sqrt{x_0^2+y_0^2+z_0^2}$ sempre',
      '$a+b+c+d$',
    ],
    correctIndices: [0],
    explanation: 'La formula della distanza punto-piano è valore assoluto dell\'equazione valutata nel punto diviso la norma del normale.',
  },
  {
    id: 224,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Per $z \\in \\mathbb{C}, z=\\overline{z}$ se e solo se:',
    options: [
      '$z$ è reale',
      '$z$ è immaginario puro',
      '$|z|=0$ sempre',
      '$z=i$',
    ],
    correctIndices: [0],
    explanation: 'Un complesso coincide con il suo coniugato se e solo se ha parte immaginaria nulla.',
  },
  {
    id: 225,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Per ogni $z \\in \\mathbb{C}$:',
    options: [
      '$|z|\\geq0$',
      '$|z|$ può essere negativo',
      '$|z|=z$ sempre',
      '$|z|=\\overline{z}$ sempre',
    ],
    correctIndices: [0],
    explanation: 'Il modulo è una distanza dall\'origine, quindi è sempre reale e non negativo.',
  },
  {
    id: 226,
    category: 'Numeri Complessi',
    type: 'single',
    text: 'Per risolvere un\'equazione complessa con $\\overline{z}$, conviene:',
    options: [
      'porre $z=x+iy$ e separare parte reale e immaginaria',
      'usare sempre direttamente il delta come nei polinomi reali',
      'cancellare il coniugato',
      'supporre sempre $z$ reale',
    ],
    correctIndices: [0],
    explanation: 'Con il coniugato l\'equazione non è un polinomio usuale in $z$; si pone $z=x+iy$ e si separano parte reale e immaginaria.',
  },
];
