# 👨‍💻 RPG Combat!  

## 🧾 Description

This is a fun kata that has the programmer building simple combat rules, as for a role-playing game (RPG). It is implemented as a sequence of iterations. The domain doesn't include a map or any other character skills apart from their ability to damage and heal one another.

### Instructions

- Complete each iteration before reading the next one.
- It's recommended you perform this kata with a pairing partner and while writing tests.

## 1️⃣ First iteration

- ***All Characters, when created, have:***
  - Health, starting at 1000
  - Level, starting at 1
  - May be Alive or Dead, starting Alive (Alive may be a true/false)

- ***Characters can Deal Damage to Characters.***
  - Damage is subtracted from Health
  - When damage received exceeds current Health, Health becomes 0 and the character dies

- ***A Character can Heal a Character.***

  - Dead characters cannot be healed
  - Healing cannot raise health above 1000

## 2️⃣ Second iteration

- ***A Character cannot Deal Damage to itself.***
- ***A Character can only Heal itself.***
- ***When dealing damage:***
  - If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
  - If the target is 5 or more Levels below the attacker, Damage is increased by 50%

---

###### From [ardalis](https://github.com/ardalis/kata-catalog).