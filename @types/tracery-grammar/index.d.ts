declare module 'tracery-grammar' {
  export = Tracery;
  export as namespace Tracery;

  namespace Tracery {
    type RawGrammar = { [key: string]: string[] };

    class Grammar {
      constructor(raw: RawGrammar);
      addModifiers(mods: any): void;
      clearState(): void;
      createRoot(rule: any): any;
      expand(rule: any, allowEscapeChars?: boolean): TraceryNode;
      flatten(rule: string, allowEscapeChars?: boolean): string;
      loadFromRawObj(raw: RawGrammar): void;
      popRules(key: any): void;
      pushRules(key: any, rawRules: any, sourceAction: any): void;
      selectRule(key: any, node: any, errors: any): any;
      toJSON(): any;
    }

    class RuleSet {
      constructor(grammar: any, raw: any);
      clearState(): void;
      selectRule(errors: any): any;
    }

    class Symbol {
      constructor(grammar: any, key: any, rawRules: any);
      clearState(): void;
      getActiveRules(): any;
      popRules(): void;
      pushRules(rawRules: any): void;
      rulesToJSON(): any;
      selectRule(node: any, errors: any): any;
    }

    class NodeAction {
      finishedRules: string[];
      node: TraceryNode;
      rule: string;
      ruleNodes: any[];
      ruleSections: string[];
      target: string;
      type: number;
      constructor(node: any, raw: any);
      activate(): any;
      createUndo(): any;
      toText(): any;
    }

    class TraceryNode {
      action?: NodeAction;
      childIndex: number;
      childRule?: string;
      children?: TraceryNode[];
      depth: number;
      errors: any[];
      expansionErrors: any[];
      finishedText: string;
      grammar: Grammar;
      isExpanded: boolean;
      parent: TraceryNode | null;
      postactions?: any[];
      preactions?: any[];
      raw: string;
      symbol?: string;
      type: number;
      constructor(parent: any, childIndex: any, settings: any);
      clearEscapeChars(): void;
      expand(preventRecursion: any): void;
      expandChildren(childRule: any, preventRecursion: any): void;
      toString(): any;
    }

    namespace baseEngModifiers {
      function a(s: string): string;

      function capitalize(s: string): string;

      function capitalizeAll(s: string): string;

      function ed(s: string): string;

      function firstS(s: string): string;

      function replace(s: string, params: any): string;

      function s(s: string): string;
    }

    function createGrammar(raw: RawGrammar): Grammar;

    function parse(rule: any): any;

    function parseTag(tagContents: any): any;
  }
}
