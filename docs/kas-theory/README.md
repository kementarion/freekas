# Kaspa 理论背景

![DAG vs BlockChain](/kas/dag-vs-blockchain.jpg)

DAG：有向无环图，可以理解为一个多维的区块链。

在 Kaspa 官网首页 [https://kaspa.org/](https://kaspa.org/)，就可以看到 Kaspa DAG 的实时运行场景。

![kaspa.org](/kas/kaspa.org.png)



## 核心理念的诞生：从链到 DAG

Kaspa 的故事始于一位杰出的计算机科学家和密码学家——**Yonatan Sompolinsky**。

- **Yonathan Sompolinsky**：他是整个项目的灵魂人物。在哈佛大学攻读博士学位时，他的导师是著名的密码学家和数学家 **Yossi Gil**。更重要的是，他曾在 **Aviv Zohar** 教授（耶路撒冷希伯来大学）的指导下进行研究。早在 2013 年，Yonatan 就在其博客上发表了一篇题为 **《Secure High Rate Transaction Processing with Bitcoin》** 的帖子，其中已经包含了 **GHOST** 协议的核心思想。这个协议后来被以太坊采纳，用于解决比特币最长链规则在高速出块时安全性下降的问题。

- **核心问题**：Yonatan 的研究始终围绕一个核心问题：**如何在不牺牲安全性和去中心化的前提下，极大地提升区块链的吞吐量（TPS）和缩短确认时间？**
    - 比特币：安全但慢（~7 TPS，确认时间长）。
    - 传统高TPS链（如EOS）：通过牺牲去中心化（少量节点）来实现速度。

Yonatan 的答案是：**放弃单一的链式结构，转向有向无环图（DAG）**。

---

## 第一阶段：GHOST - 链式结构的优化 (2013)

::: tip

这是所有故事的起点。

:::

- **论文标题**: *《Secure High-Rate Transaction Processing in Bitcoin》* (最初是 Yonatan 的博客文章，后成为正式论文)

- **作者**: Yonatan Sompolinsky, Aviv Zohar

- **发表时间**: 2013年（博客），2015年（金融密码学与数据安全会议 FC）

- **论文**：[https://eprint.iacr.org/2013/881.pdf](https://eprint.iacr.org/2013/881.pdf)

- **论坛讨论**：[https://bitcointalk.org/index.php?topic=359582.0](https://bitcointalk.org/index.php?topic=359582.0)

- **核心思想**:

    - **放弃“最长链”规则**： 最长链是指包含区块最多的链。GHOST 规则改为选择 **“子树最大”** 的链作为主链。

    - **包含孤块**： 在计算链的“重量”时，不仅算主链上的区块，也要算上被主链区块“抛弃”掉的孤块（它们也是合法算力的证明）。这使选择主链的规则更能反映总算力的分布。

::: info 影响

- GHOST 协议**后来被以太坊采纳**，成为其从比特币的最长链规则转向更安全共识机制的基础。GHOST 仍然是**链式结构**，它只是优化了链的选择规则，并没有改变底层数据结构。

:::

---

## 第二阶段：PHANTOM - BlockDAG 共识的奠基之作 (2018)

::: tip

这是将共识从“链”扩展到“图”的里程碑式论文。

:::

- **论文标题**: *《PHANTOM: A Scalable BlockDAG Protocol》*

- **作者**: Yonatan Sompolinsky, Aviv Zohar

- **发表时间**: 2018 年

- **论文**: [https://diyhpl.us/~bryan/papers2/bitcoin/Phantom:%20A%20scalable%20block%20DAG%20protocol%20-%202018.pdf](https://diyhpl.us/~bryan/papers2/bitcoin/Phantom:%20A%20scalable%20block%20DAG%20protocol%20-%202018.pdf)

- **核心贡献**: 首次为 **BlockDAG** 模型提供了一个**可证明安全**的共识协议。PHANTOM 协议的核心思想是通过从​​链式结构转向  DAG 结构​​，并配以新的共识算法，来​​突破比特币协议中为了安全而牺牲可扩展性的根本限制​​。

- **技术细节**:

    1.  **数据结构**: 允许区块引用多个父区块，形成DAG。这极大地提高了吞吐量，因为几乎不会产生孤块。

    2.  **最大k-簇问题**: PHANTOM 的核心是一个排序算法。它将 DAG 中的排序问题转化为一个图论问题：寻找一个最大的区块集合（称为“蓝色集”），其中任意两个区块之间的“距离”不超过 `k` 个区块。`k` 是一个可扩展的参数，与网络延迟相关。

    3.  **染色算法**:
        - **步骤1**: 识别“诚实”区块（蓝色集）。算法会遍历DAG，选择那些在“过去”中相互关联紧密的区块染成蓝色。这些区块被认为是因网络延迟而暂时分叉的诚实区块。
        - **步骤2**: 排序。先对蓝色集里的区块进行排序（形成主链），然后再将攻击者创建的“红色”区块（恶意区块）插入到排序中。

    4.  **局限性**: PHANTOM 的算法非常安全，但**计算复杂度很高**，因为它需要解决一个近似于“最大k-簇”的优化问题，这对于需要实时达成共识的区块链来说可能太慢。

---

## 第三阶段：GHOSTDAG - 从理论到实践的飞跃 (2021)

::: tip

GHOSTDAG 是 PHANTOM 的实用化、高效化版本，也是 **Kaspa 主网在 2021 年启动时所使用的协议。**。

:::

- **论文标题**: *《PHANTOM GHOSTDAG: A Scalable, Generalization of the Nakamoto Consensus Protocol》*

- **作者**: Yonatan Sompolinsky, Shai Wyborski, Aviv Zohar

- **发表时间**: 2021 年 9 月

- **论文**: [https://eprint.iacr.org/2018/104.pdf](https://eprint.iacr.org/2018/104.pdf)

- **核心贡献**: 提供了一个与 PHANTOM 安全性相当，但**计算效率极高、极其简单**的 BlockDAG 共识协议。

- **与 PHANTOM 的关键区别**:

    - **贪心算法**: GHOSTDAG 不使用复杂的“k-簇”优化，而是采用一种**贪心算法**来选择主链。它简单地、递归地选择拥有 **“最大过去”** 的区块。这里的“过去”指的是该区块及其所有祖先区块构成的子图。

    - **直观理解**: 这个规则是比特币的“最长链”（最重链）规则在 DAG 世界的直接推广。它选择的是“最重子树”（Heaviest Subtree）。

    - **等价性**: 论文证明了在常见的网络条件下，GHOSTDAG 选择的“蓝色集”（诚实区块集）与 PHANTOM 选择的集合是**相同或极其相似**的，但计算速度天差地别。

    - **结果**: GHOSTDAG 使得实时处理 DAG 和每秒出块成为可能，为 Kaspa 的主网上线扫清了工程障碍。

**简单总结 PHANTOM 与 GHOSTDAG 关系**： PHANTOM 是“完美但稍慢的解决方案”，它证明了 BlockDAG 共识的可行性；GHOSTDAG 是“足够好且极快的解决方案”，它让 BlockDAG 共识变得实用。Kaspa 选择了 GHOSTDAG。



---

## 第四阶段：DAGKNIGHT - 面向未来的演进 (2022)

DAGKNIGHT 是比 GHOSTDAG 更进一步的协议，旨在解决 GHOSTDAG 的一个关键限制：**固定的参数 `k`**。

- **论文标题**: *《DAGKNIGHT: A Parameterless Generalization of Nakamoto Consensus》*


- **作者**: Yonatan Sompolinsky, Michael Sutton

- **发表时间**: 2022 年 10 月 31 日

- **论文内容**：[https://eprint.iacr.org/2022/1494.pdf](https://eprint.iacr.org/2022/1494.pdf)

- **核心思想**: **实现无参数（Parameter-less）的共识。**

- **技术细节**:
    - **GHOSTDAG 的 `k` 参数问题**: 在 GHOSTDAG 中，`k` 是一个预定义的值，代表了网络允许的“最大分叉深度”。它必须根据网络的实际延迟（如 1秒、3秒）来保守设定。如果 `k` 设得太小，诚实区块可能被错误地排除在蓝色集外；设得太大，又会降低安全性。这是一个需要人为权衡的参数。
    - **DAGKNIGHT 的解决方案**: DAGKNIGHT 协议是 **“无参数”** 的。它不预先设定 `k`，而是**动态地、事后**地观察整个 DAG 的拓扑结构，来自动确定什么样的区块集合可以被安全地确认为“诚实”的。
    - **“先确认，后排序”**: DAGKNIGHT 引入了一个新的安全原语。它首先快速地对区块进行“安全确认”，然后再进行全局排序。这意味着交易的确认时间可以大大缩短，甚至可以实现“亚秒级”的确认。

::: info 注：

- DAGKNIGHT 白皮书的发布时间是2022年**10月31日**，与比特币的白皮书发布时间(2008年**10月31日**)是同一天。

- 其他 Kaspa 相关的论文：[https://kaspa.org/publications/](https://kaspa.org/publications/)

- 2025年9月 - 状态更新：
  
  * DAGKNIGHT 正在开发中，根据 Michael Sutton 的介绍，预计会跟 vProgs 一起打包发布。

:::

---


## 核心团队

- **Yonatan Sompolinsky**： 创始人，首席科学家。理论奠基人。

    - [https://x.com/hashdag](https://x.com/hashdag)

    - [https://hashdag.medium.com/](https://hashdag.medium.com/)


- **Michael Sutton**： 项目的首席程序员。

    - [https://x.com/michaelsuttonil](https://x.com/michaelsuttonil)


- **Aviv Zohar 教授**： Yonatan 的导师和重要合作者，为 PHANTOM 和 GHOSTDAG 协议提供了重要的学术指导。

    - [https://x.com/Avivz78](https://x.com/Avivz78)


- **Shai Wyborski**： 核心研究员，GHOSTDAG 论文的合著者。后来退出核心开发团队。
  
    - [https://x.com/DesheShai](https://x.com/DesheShai)


- **其他核心团队成员**：

    * [https://x.com/OriNewman](https://x.com/OriNewman)
  
    * [https://x.com/coderofstuff_](https://x.com/coderofstuff_)

    * [https://x.com/eliottmea](https://x.com/eliottmea)




## Yonatan 的一些趣事

### 1. Yonatan 的早期论文被多个项目引用

![alt text](/kas/gost-in-eth.png)



### 2. XRP 白皮书中提到 Yonatan 的 GHOST 协议

- [https://x.com/captaindwork/status/1946455870381928708](https://x.com/captaindwork/status/1946455870381928708)

![alt text](/kas/yonatan-in-xrp.png)



### 3. 2013 年 Aviv 与 Yonatan 在比特币社区讨论 GHOST 相关技术

- [https://bitcointalk.org/index.php?topic=359582.0](https://bitcointalk.org/index.php?topic=359582.0)

![alt text](/kas/yonantan-2013-bitcoin.png)

- 网友的讨论：[https://x.com/brt2412/status/1974189975089426710](https://x.com/brt2412/status/1974189975089426710)


### 4. Yonatan 的生日

Yonatan 偶然透露出他的生日是 4 月 5 号。巧合的是，创立比特币的“中本聪”也是这一天生日。

![alt text](/kas/yonatan-birthday.png)

于是有人开始深扒，并发现了更多的巧合，于是很多人开始怀疑 Yonatan 就是中本聪。当然 Yonatan 本人是极力否认的。

细节请看如下链接，仅供娱乐：

- [https://x.com/christi61026749/status/1878527018054168621](https://x.com/christi61026749/status/1878527018054168621)


### 5. Yonatan 自称是中本聪的 twitter 回帖（估计是开玩笑）

- [https://x.com/hashdag/status/1358530514483896326](https://x.com/hashdag/status/1358530514483896326)

![alt text](/kas/yonantan-x-santoshi.png)


### 6. Yonatan 自称是中本聪的另一个回帖（估计也是开玩笑）

- [https://x.com/hashdag/status/1382359025560518657](https://x.com/hashdag/status/1382359025560518657)

![alt text](/kas/yonatan-x-santoshi2.png)

::: tip 注：

- Yonatan 是一位非常谦逊低调、温和儒雅的人。很难想像他也会开这种​​打趣​​的玩笑。或者，他是认真的？! 

- 无论如何，他所创立的 Kaspa **保留了比特币的优点，修复了比特币的缺陷**，是真正的、下一代的比特币。

:::

### 7. Yonatan 的一次采访(2024年5月)

- [https://hackernoon.com/interview-with-dr-yonatan-sompolinsky-of-kaspa](https://hackernoon.com/interview-with-dr-yonatan-sompolinsky-of-kaspa)

::: info 本文中 Yonatan 否定了自己是中本聪的说法：

**问：在你YouTube访谈和Twitter空间的评论区，你的粉丝们经常称你为中本聪。你对此有何感受？**

像白痴一样。


**问：为什么？**

我的意思是，有些人认为我能写出像中本聪那样可用于生产环境的代码库，这让人感到暖心。我本科的C/C++课程只得了62分，而那还是靠讲师手下留情才得到的。也许如果比特币是用Java发布的，并且有copilot辅助，那么我可能就会是中本聪了，谁知道呢。

**问：你知道中本聪是谁吗？**

我可以告诉你，但那样我就得灭口了。说真的，没人知道，而且我认为搞清这一切并不重要。中本聪的匿名性是比特币诞生以及去中心化运动的核心。此外，发现中本聪身份的价值被高估了；就拿我来说，我在加密技术和无需许可的共识方面所知道的远比中本聪多；她（注：原文使用了“she”）已经多年没参加过行业会议了。

:::
