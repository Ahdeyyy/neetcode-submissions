class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = new Array<string>();
        const a = s.split("");
        const valid_open_paren = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const open_parens = ['(', '{', '[']
        const close_parens = ['}', ')', ']']
        for (const c of a) {

            if (open_parens.includes(c)) {
                stack.push(c)
            } else {
                const open = stack.pop()
                if (open !== valid_open_paren[c]) return false
            }
        
        }

        // console.log(a.length)
        return stack.length === 0
    }
}
