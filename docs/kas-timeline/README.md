# Kaspa 重要事件



::: tip 官方的时间线文档：

- [https://wiki.kaspa.org/en/timeline](https://wiki.kaspa.org/en/timeline)

:::

## 2021 年

### 2021-11-07 主网上线

- [https://discord.com/channels/599153230659846165/844142778232864809/906965464373153843](https://discord.com/channels/599153230659846165/844142778232864809/906965464373153843)

- 这个截图是北京时间：

<img :src="$withBase('/kas/2021-11-07-kaspa-mainnet2.png')" />

### 2021-11-07 第一个区块被挖出

::: info 第一个被挖出的区块：
- [https://explorer.kaspa.org/blocks/d884013dc7b892b793f1f261432fa7de504be574d4f327b1a7a9379a630b96b3](https://explorer.kaspa.org/blocks/d884013dc7b892b793f1f261432fa7de504be574d4f327b1a7a9379a630b96b3)
:::

<br />


#### (1) 创世区块

  * 创世区块是被硬编码在代码中的

  * 创世区块：[https://explorer.kaspa.org/blocks/caeb97960a160c211a6b2196bd78399fd4c4cc5b509f55c12c8a7d815f7536ea](https://explorer.kaspa.org/blocks/caeb97960a160c211a6b2196bd78399fd4c4cc5b509f55c12c8a7d815f7536ea)

  * [https://x.com/michaelsuttonil/status/1641180775662907393](https://x.com/michaelsuttonil/status/1641180775662907393)

  * [https://x.com/DagKnight24/status/1685787679483465728](https://x.com/DagKnight24/status/1685787679483465728)



::: info Kaspa 的创世区块所包含的内容：

"Whatever seems good to you and your brothers to do with the rest of the silver and gold, you may do, according to the will of your God." Ezra 7:18

- 中文翻译：“剩下的金银，你和你的弟兄看着怎样好，就怎样用，总要遵着你们神的旨意。” 

- 出自《圣经·旧约》中的 ​​《以斯拉记》第 7 章第 18 节​​。

- 典故：波斯王授权以斯拉和他的同胞（“你的弟兄”），可以自主决定如何处置从巴比伦带回耶路撒冷后​​剩余的金银​​。

- 这节经文体现了在信仰原则指导下，赋予信仰群体在具体事务上进行判断和决策的权力。

:::

![alt text](/kas/kaspa-2021-genesis-block.png)

- 下面是比特币的创世区块：

![alt text](/kas/kaspa-2021-btc-genesis-block.png)

::: info 区块中的内容：

《泰晤士报》2009年1月3日头版标题："Chancellor on brink of second bailout for banks" (财政大臣处于对银行进行第二轮紧急援助的边缘) 

:::

#### (2) 检查点区块

[https://github.com/kaspagang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb](https://github.com/kaspagang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb)

::: tip 背景：

- Kaspa主网启动后约两周（2021年11月），一个严重 Bug 导致网络分裂。

- 修复Bug后，网络需要重启。开发者选择了社区节点在崩溃前普遍认可的一个区块（称为**检查点区块**，特定哈希值和时间戳）作为新起点。

- 新版本的节点软件被硬编码了一个新的**硬编码创世块（hardwired genesis block）**，其 UTXO 集合被设定为与选定的检查点区块的 UTXO 集合完全相同。

- 仅靠节点软件本身的数据，只能验证从硬编码创世块开始的链的完整性，但无法证明硬编码创世块的 UTXO 集合确实与检查点区块的 UTXO 集合匹配（即无法证明重启时没有作弊）。

:::

这篇文章详细阐述了 Kaspa 项目如何通过一套严谨的、多步骤的密码学验证流程，结合社区提供的数据和比特币区块链的时间戳服务，证明了 Kaspa 区块链从空 UTXO 集开始的完整性，并排除了在重启过程中进行预挖矿或状态篡改的可能性。核心在于利用外部可验证数据填补了节点软件自身的验证空白，并巧妙地利用比特币来锚定时间。

- 有网友做了 Kaspa 的创世完整性校验：[https://x.com/LuciS1654739/status/1971784024210526219](https://x.com/LuciS1654739/status/1971784024210526219)



### 2021-11-26 主网出现 Bug

![alt text](/kas/2021-11-26_urgent-bug.png)

- [https://discord.com/channels/599153230659846165/844142778232864809/913517515269865532](https://discord.com/channels/599153230659846165/844142778232864809/913517515269865532)

### 2021-11-28 创建黑洞地址并销毁 11M KAS

因为出现严重 bug，主网不得不进行在线修复，在此期间所有矿工停止挖矿，只有 Shai 按要求继续挖矿以维持系统运行。相应的挖矿收益，最后经社区投票讨论，放入黑洞地址销毁。

![alt text](/kas/2021-11-28_burn-address.png)

- 细节：
  
    * [https://discord.com/channels/599153230659846165/844142778232864809/914259193320583178](https://discord.com/channels/599153230659846165/844142778232864809/914259193320583178)

- 黑洞地址：

    * [https://kas.fyi/address/kaspa:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkx9awp4e](https://kas.fyi/address/kaspa:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkx9awp4e)


## 2022 年

### 2022-05-24 首次上线交易所 (TXBIT)

- Kaspa 第一次上线交易所。上线到 TXBIT 交易。

- 遗憾的是，TXBIT 一年后倒闭了：[https://www.blocktempo.com/txbit-is-closing-down-in-sep-2023/](https://www.blocktempo.com/txbit-is-closing-down-in-sep-2023/)


### 2022-09-16 上线 MEXC

- [https://www.mexc.com/exchange/KAS_USDT](https://www.mexc.com/exchange/KAS_USDT)

### 2022-10-31 DagKnight 论文发布

- [https://eprint.iacr.org/2022/1494.pdf](https://eprint.iacr.org/2022/1494.pdf)

- [https://kaspa.org/what-is-ghostdag-and-dagknight/](https://kaspa.org/what-is-ghostdag-and-dagknight/)

::: tip 注：

- **10月31日**也是比特币白皮书发布时间(2008年**10月31日**)。

:::

## 2023 年

### 2023-03-21 Gate.io 上线 Kaspa

- [https://www.gate.com/trade/KAS_USDT](https://www.gate.com/trade/KAS_USDT)



## 2024 年

### 2024-06-26 MARA 开始挖 Kaspa

- 著名的挖矿上市公司 MARA 官宣开始挖矿 Kaspa。

- 在此之前，MARA 只挖比特币。

- MARA 官方声明：[https://ir.mara.com/news-events/press-releases/detail/1360/marathon-digital-holdings-announces-kaspa-mining-operations](https://ir.mara.com/news-events/press-releases/detail/1360/marathon-digital-holdings-announces-kaspa-mining-operations)

- Marathon Digital Holdings (股票代码: MARA)​​ 是美国最大、最主要的​​比特币挖矿公司​​之一。该公司专注于区块链生态系统，尤其是通过运营大规模数据中心来“挖矿”生成比特币。

- MARA 在全球（主要在美国）运营着多个大型矿场，拥有数万台矿机，其算力（Hash Rate）在全球比特币网络中占有显著份额。公司通常不会立即出售其挖出的所有比特币，而是将大部分比特币作为资产储备持有在公司的资产负债表上。这意味着其财务状况与比特币的市场价格高度相关。

### 2024-09-15 KRC20 上线

- 可以铸造 meme 币了……

- 第一个 meme 币 NACHO​​ 也在同一天晚上8点开放铸造。NACHO 的名字来源于 Shai 的宠物黑猫。

    * [https://x.com/NachotheKat](https://x.com/NachotheKat)
  
    * [https://x.com/DesheShai/status/1891419924515488243](https://x.com/DesheShai/status/1891419924515488243)

- 目前（2025 年 10 月），NACHO 已经有了一千多万美元的市值，并在 Gate.io 等交易所交易。

![alt text](/kas/kaspa-nacho.png)


## 2025 年

### 2025-05-05 Kaspa 1.0.0 正式版上线

- 2025 年 5 月 5 日 15:00 (UTC) 时间上线，版本名称为 Crescendo，是一次硬分叉上线。

- 从原来 1 BPS 升级到 10 BPS

- 技术上已经可以支持智能合约。

- 相关的帖子：[https://x.com/michaelsuttonil/status/1919715492740124699](https://x.com/michaelsuttonil/status/1919715492740124699)



### 2025-07-01 官方 X 账号去中心化

- 针对 Yonatan 今年提出的去中心化议题，社区决定将原官方的 X 账号交给一名社区人员维护。

::: info Yonatan 的文章: 
[https://hashdag.medium.com/in-which-we-are-all-faceless-until-we-have-faces-part-i-5f100e0555a4](https://hashdag.medium.com/in-which-we-are-all-faceless-until-we-have-faces-part-i-5f100e0555a4)
:::

- 在此之前，"官方" X 账号的名字一度被改为 "Kaspa City" 或其他名字。社区对这些迷之操作很不满意。

- 于是，有了下面的投票：

![alt text](/kas/2025-07-01_x-account.jpg)

- 投票链接：

    * [https://discord.com/channels/599153230659846165/935851925608472617/1389354191650295828](https://discord.com/channels/599153230659846165/935851925608472617/1389354191650295828)

    * 维护人 Christian Ludwig ([https://x.com/christi61026749](https://x.com/christi61026749)) 后来将 Kaspa 官方推特 id 从 `@KaspaCurrency` 改为 `@kaspaunchained`。

    * 他的操作更迷了……
  
    * [https://x.com/kaspaunchained](https://x.com/kaspaunchained)


- 不管怎样，这个账号算是彻底被玩儿废了。也算是完成"去中心化"了吧。

- 很多人开始自己创建 Kaspa 宣传账号，如：

    * [https://x.com/KaspaReport](https://x.com/KaspaReport)

    * [https://x.com/DailyKaspa](https://x.com/DailyKaspa)

    * [https://x.com/thekaspaonion](https://x.com/thekaspaonion)



### 2025-06-01 大胡子 Shai 与社区的矛盾

- Shai 大胡子 ([https://x.com/DesheShai](https://x.com/DesheShai)) 是一名数学博士，参与了部分 Kaspa 的论文工作，曾是 Kaspa 的核心成员之一。

- 因 KEF 对其不满意，与 KEF 决裂。

    * [https://x.com/oneforonehaha/status/1929012576676937918](https://x.com/oneforonehaha/status/1929012576676937918)

    * [https://x.com/oneforonehaha/status/1929241485670588503](https://x.com/oneforonehaha/status/1929241485670588503)

    * KEF (Kaspa Eco Foundation) 是 Kaspa 区块链的生态基金会，旨在加速 Kaspa 生态系统的开发、采用和可持续性，包括智能合约和生态建设。

- 因开发核心团队声明 Shai 已经不参加核心团队工作，他的发言不再代表核心团队的意见，而引起 Shai 的不满，最终（可能由于各种误会）决裂。

    * [https://x.com/DesheShai/status/1929668361111437812](https://x.com/DesheShai/status/1929668361111437812)

    * 有人问："如果整个加密行业的流量都转到 Kaspa，Kaspa 是否能够承受得住？" Shai 给了一个肯定的答复。核心开发团队认为这个观点是不严谨的，而大众会误以为 Shai 代表了核心团队的观点。
  
    * Shai 认为自己本来就不是代表核心团队。对相关的表态表示不理解，不满意。

- 他依然会参与 Kaspa 社区的一些问题讨论。


### 2025-09-11 vProg 协议黄皮书发布

- [https://x.com/michaelsuttonil/status/1966134048209908215](https://x.com/michaelsuttonil/status/1966134048209908215)

- [https://github.com/kaspanet/research/blob/main/vProgs/vProgs_yellow_paper.pdf](https://github.com/kaspanet/research/blob/main/vProgs/vProgs_yellow_paper.pdf)

::: info 黄皮书内容总结：

vProg 协议是一种革命性的区块链扩容方案，其核心是**在不牺牲底层去中心化安全的前提下，破解应用（vProg）间的“主权”与“可组合性”难以兼得的困境**。

**1. 解决的根本矛盾：主权 vs. 可组合性**

*   **传统困境**：应用若要保持独立主权（各自管理状态，互不干扰），就很难实现高效的同步交互（可组合性）；反之，若强行将它们放在一起以实现组合性，又会相互拖累，形成性能瓶颈，并丧失主权。

*   **vProg的目标**：让成千上万个去中心化应用能像在一条链上那样**安全、原子化地即时交互**，同时每个应用又保持高度的独立性和抗审查能力，从而形成一个强大且不碎片化的统一经济体。

**2. 范式转换：从“全局执行”到“本地验证”**

协议的核心创新在于角色分离和证明机制：

*   **L1 作为“信任锚”**：Kaspa主网不再“计算”所有程序，而是退居为**中立的基础设施**，负责：

    *   **排序与数据可用性**：确定交易顺序并保证数据可查。

    *   **依赖关系计算**：像交通指挥官一样，精确计算出一笔交易会“波及”哪些vProg（定义“计算范围”），并进行资源计量，防止网络拥塞。

*   **vProg 的“主权执行”**：当一个vProg（A）需要与另一个vProg（B）交互时，A的节点**不会被动等待B的回复**，而是**主动在本地模拟执行B的代码**。这确保了A的运行永不因B的故障而停滞。

*   **ZK证明作为“信任基石”**：本地执行的结果是否正确，不由主观判断，而是由**零知识证明**来 cryptographic 地验证。任何节点都可以快速验证证明的真伪，从而信任本地执行的结果。

**3. 实现无限扩展的关键机制**

*   **状态锚点浅化**：vProg向主网提交状态证明越频繁，其他节点验证其当前状态所需追溯的历史数据就越少（锚点越“浅”），跨程序交互的负担就越小，系统整体越轻量、高效。

*   **激励驱动的证明市场**：这创造了一个天然的经济需求，催生一个专业、竞争的证明者服务市场，他们通过频繁提交证明来获利，同时被动地维护了整个网络的高性能和可扩展性。

**终极愿景：**

vProg协议旨在构建一个“主权网络效应”体系：每个应用都是独立的王国（主权），但通过一套密码学保证的通用规则，这些王国可以像在一个大陆上一样无缝、安全地进行贸易与合作（可组合性），而承载这一切的基座（Kaspa L1）则始终保持其去中心化的坚固本质。

::: 

- vProg 将实现智能合约协议直接部署，而不需要依赖 L2 智能合约平台。

- Yonatan 不喜欢 L2 的设计，认为 L2 不会反馈补充 L1 使矿工受益。所以他主持设计了 vProg，用于解决这种问题。

::: tip Yonatan 讨论 Layer 2 的帖子：

- **帖子：** [https://x.com/hashdag/status/1972383422204305492](https://x.com/hashdag/status/1972383422204305492)

- **翻译：** 我(Yonatan) 对 Kaspa 的二层解决方案（L2s）几乎一无所知，也不清楚它们为何被创建。因此，了解其架构、代码库透明度等信息对我而言并无价值。**我认为 L2 是一条不明智的道路，冒着重蹈以太坊覆辙的风险，并且多年来我一直直言这一担忧（可参考我关于原子可组合性与碎片化问题的论述）。** 针对这一问题，Kaspa 核心团队长期致力于一种​​内置的 L2 设计​​——简而言之，这是一个通过零知识证明验证的计算层，与 L1 共识紧密集成：既从L1获得操作码与数据结构支持，又将计算及更关键的状态数据剥离于 L1 之外。这是整个加密货币领域（不仅是Kaspa生态中）唯一能​**​增强而非分流 L1 网络效应**​​的“L2”体系。其他方案于我而言只是干扰。总之，我敢说我对 Kaspa L2s 的了解比 X 平台上任何人都少——你试试便知，我根本一窍不通。

:::




**附：什么是黄皮书、白皮书？**

| 特性 | 白皮书 | 黄皮书 |
| :--- | :--- | :--- |
| **核心性质** | **商业计划书**、**概念文档** | **技术规范**、**学术论文** |
| **目标读者** | 普通投资者、潜在用户、广大社区 | 开发者、研究人员、技术专家 |
| **主要内容** | 项目愿景、要解决的问题、代币经济、路线图、团队介绍 | 数学原理、加密算法、协议细节、公式推导、代码规范 |
| **语言风格** | 通俗易懂，具有营销和宣传性质 | 高度专业化、严谨，充满术语和数学符号 |
| **目的** | **解释“为什么”要做这个项目**，吸引关注和投资 | **解释“如何”实现这个项目**，提供技术蓝图 |


- 当你作为一个**潜在投资者或普通用户**，想了解一个项目是做什么的，你应该去读它的**白皮书**。

- 当你作为一个**区块链开发者或研究人员**，想了解一个项目的底层技术细节并为其贡献代码，你应该去研究它的**黄皮书**（如果它有的话）。



### 2025-09-26 Kasplex 智能合约上线

- [https://x.com/kasplex/status/1971469795317960800](https://x.com/kasplex/status/1971469795317960800)

- 这是 Kaspa 第一个 L2 的智能合约。

- 可以在这里查看、访问 L2 智能合约：[https://kas.fyi/l2-networks](https://kas.fyi/l2-networks)


### 2025-10-05 主网压力测试

















