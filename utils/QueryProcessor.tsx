export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Ebil";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

  if (query.toLowerCase().includes("andrew id") || 
      query.toLowerCase().includes("andrewid")) {
    return "ebilj";
  }

  if (query.toLowerCase().includes(" plus ")) {
    const matches: RegExpMatchArray | null = query.match(/\d+/g);

    if (matches) {
      const numbersArray: number[] = matches.map(Number);
      const total = numbersArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
      return total.toString();
    }
  }

  if (query.toLowerCase().includes("largest")) {
    const matches: RegExpMatchArray | null = query.match(/\d+/g);

    if (matches) {
      const numbersArray: number[] = matches.map(Number);
      return Math.max(...numbersArray).toString();
    }
  }

  return "";
}
