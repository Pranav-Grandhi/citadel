enum GuessState {
    Miss,
    Match,
}

interface GuessListItem {
    guess: string;
    result?: GuessState[];
}

interface StoreState {
    answer: String;
    guesses: GuessListItem[];
    gameState: 'playing' | 'won' | 'lost';
}