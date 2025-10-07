

# How many transaction data entries can each block hold?

::: tip 问题

Kaspa currently produces 10 blocks per second. Then, how many transaction data entries can each block hold? What is the theoretical maximum Transactions Per Second (TPS)?

:::

- Kaspa's core member Ori Newman provided a detailed explanation:
：[https://x.com/OriNewman/status/1974829990882553925](https://x.com/OriNewman/status/1974829990882553925)




- Important Concept: **mass** is the **unit** of data that a block can hold. 

- According to the standards of KIP-9 and KIP-13, the maximum **mass** limitation of each block in Kaspa is **500,000 mass**.

- Different transactions occupy different amounts of **mass**. There are three types of transactions as follows:

- **Minimum Transaction (1 input, 0 outputs):** Generally used for token burning, UTXO merging and cleaning, etc. It has very few application scenarios.
  
  * Each transaction occupies **584 mass**.

  * Each block can accommodate 500,000 / 584 = **856** such transactions.

- **Common Transaction (1 input, 2 outputs):** A typical transfer transaction that spends one input and creates two outputs (sent to two addresses).
  
  * Each transaction occupies **2036 mass**.

  * Each block can accommodate 500,000 / 2036 = **245** such transactions.

- **Layer 2 Transaction (1 input, 1 output):** Suitable for Layer 2 applications (such as state channels or smart contracts), and the transaction carries a payload.
  
  * Each transaction occupies **1452 mass**.

  * Each block can accommodate 500,000 / 1452 = **344** such transactions.

::: info Summary

- Calculated based on **minimum transactions**, each block can accommodate 856 transactions, and the Transactions Per Second (TPS) can reach **8560** (10 blocks per second). **However, this type of transaction scenario is inherently rare and has no practical significance.**

- Calculated based on common transactions and L2 transactions, the capacity range of each block is 245 - 344, and the TPS range is between **2450 TPS and 3440 TPS**. **This is a reasonable and meaningful TPS value.**

:::








