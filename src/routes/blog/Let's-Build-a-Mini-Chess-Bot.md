---
title: Let's Build a Mini Chess Bot!
date: '2024-12-14'
preview: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
thumbnail: Warren-Buffet.jpg
---

## Intro
Back in late 2023, I and a friend took part in [Sebastian Lague's Chess Coding Challenge](https://github.com/SebLague/Chess-Challenge), a competition where chess bots whose code was under 1024 tokens would duke it out for the 2 best rewards known to man, bragging rights and having your name possibly mentioned by a somewhat large internet celebrity.
Programming with such constraints and a focus a focus on performance means that the code will be **evil**, we are sacrificing readability and extensibility for the sake of making the code shorter and faster, which for most real world applications is a terrible idea. Computers are so fast that making very performant code usually isn't particularly important and making code shorter for the sake of shortness is just pointless.
This was my first foray into C#, working collaboratively on code, and chess bots, so the following is by no means perfect, but should give you a good sense of where to start with your own chess bot and the big mistakes I made.
[[View our bot here]](https://github.com/KennethOnGitHub/KnightToE4F)


## The Bot
A chess bot has two key components, an **evaluation algorithm** and a **search algorithm**. An evaluation algorithm calculates how good a position is, a search algorithm looks ahead into the future to find those good positions. 
Chess is a game where the number of possible positions grows incredibly fast the further into the future you look (see [Shannon's Number](https://en.wikipedia.org/wiki/Shannon_number)), therefore, a strong search algorithm is pivotal to making a strong bot. Focusing far too much on evaluation compared to searching was one major mistake we made; looking further into the future trumps evaluating a position more precisely. It doesn't matter if a position looks really good if looking ahead one move shows that it'll be terrible (and vice-versa)!

### Evaluating a position
When looking at a chess position, there are two things we looked at, **material advantage** (how much more value in terms of pieces one side has) and **positional advantage** (how much better these pieces are placed).

#### Material Advantage
Finding material advantage can be done incredibly simply by adding the total value of the pieces one side has and subtracting the value of the other side to get a numeric value. For example, if white has a queen and a rook whilst black has a queen and a knight, the material advantage for white would be: $$(\text{QUEEN VALUE} + \text{ROOK VALUE} - \text{QUEEN VALUE} - \text{KNIGHT VALUE})$$In the real world, the value of a type of piece isn't static and changes as the game develops (e.g. a cluttered board benefits a knight, whilst an open board benefits a bishop), however, for the sake of simplicity manually setting the value of pieces is sufficient. For our bot, we used the following values:
| Pawn | Knight | Bishop | Rook | Queen |
|--|--|--|--|--|
| 100 | 100 | 300 | 500 | 900 | 

#### Positional Advantage
Calculating the how well pieces are placed is a greater challenge, there are innumerable factors to consider (how central a piece is, whether or not it is blocked in by other pieces, whether the structure of the pawns is good, etc...) which I implore those who are interested in Chess Programming to look into, however, we have found that using a piece-square table yields excellent results for the amount of code required and is far more than sufficient on its own. A piece-square table, simply put, is an array of integers where each value in the array corresponds to the value of having a particular piece on that square (See one table we got from [PeSTO](https://www.chessprogramming.org/PeSTO%27s_Evaluation_Function) that we used for our project below)
```C#
int midgame_queen_table[64] = {
    -28,   0,  29,  12,  59,  44,  43,  45,
    -24, -39,  -5,   1, -16,  57,  28,  54,
    -13, -17,   7,   8,  29,  56,  47,  57,
    -27, -27, -16, -16,  -1,  17,  -2,   1,
     -9, -26,  -9, -10,  -2,  -4,   3,  -3,
    -14,   2, -11,  -2,  -5,   2,  14,   5,
    -35,  -8,  11,   2,   8,  15,  -3,   1,
     -1, -18,  -9,  10, -15, -25, -31, -50,
};
```
As you can see here, in the midgame, placing a queen in the top left of the board would result in a -28 change in positional advantage. (Note that in our implementation of piece square tables, you'll notice that we've flipped the table upside down as our square 0 is the bottom left square instead of being the top right square in the example given above). 
PeSTO was an integral part to making the evaluation function of multiple high performing bots on account of how surprisingly effective it is for the amount of code necessary for the implementation.