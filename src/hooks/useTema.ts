
import { useState } from 'react';
import { defaultTema } from '@core/tema/defaultTema';

export function useTema() {
    const [temaSelecionado, setTemaSelecionado] = useState(defaultTema);

    return { temaSelecionado };
}
