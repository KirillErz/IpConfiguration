﻿// Type definitions for linq.js 2.2
// Project: http://linqjs.codeplex.com/
// Definitions by: Marcin Najder <https://github.com/marcinnajder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// todo: jQuery plugin, RxJS Binding

declare module linq {

    interface EnumerableStatic {
        Choice(...contents: any[]): Enumerable<any>;
        Choice(contents: any[]): Enumerable<any>;
        Cycle(...contents: any[]): Enumerable<any>;
        Cycle(contents: any[]): Enumerable<any>;
        Empty(): Enumerable<any>;
        From<T>(obj: T[]): Enumerable<T>;
        From<T>(obj: T): Enumerable<T>;
        Return(element: any): Enumerable<any>;
        Matches(input: string, pattern: RegExp): Enumerable<any>;
        Matches(input: string, pattern: string, flags?: string): Enumerable<any>;
        Range(start: number, count: number, step?: number): Enumerable<any>;
        RangeDown(start: number, count: number, step?: number): Enumerable<any>;
        RangeTo(start: number, to: number, step?: number): Enumerable<any>;
        Repeat(obj: any, count?: number): Enumerable<any>;
        RepeatWithFinalize(initializer: () => any, finalizer: (resource: any) =>void ): Enumerable<any>;
        Generate(func: () => any, count?: number): Enumerable<any>;
        Generate(func: string, count?: number): Enumerable<any>;
        ToInfinity(start?: number, step?: number): Enumerable<any>;
        ToNegativeInfinity(start?: number, step?: number): Enumerable<any>;
        Unfold(seed, func: ($) => any): Enumerable<any>;
        Unfold(seed, func: string): Enumerable<any>;
    }

    interface Enumerable<T> {
        //Projection and Filtering Methods
        CascadeBreadthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        CascadeBreadthFirst(func: string, resultSelector: string): Enumerable<any>;
        CascadeDepthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        CascadeDepthFirst(func: string, resultSelector: string): Enumerable<any>;
        Flatten(...items: any[]): Enumerable<any>;
        Pairwise(selector: (prev, next) => any): Enumerable<any>;
        Pairwise(selector: string): Enumerable<any>;
        Scan(func: (a, b) => any): Enumerable<any>;
        Scan(func: string): Enumerable<any>;
        Scan(seed, func: (a, b) => any, resultSelector?: ($) => any): Enumerable<any>;
        Scan(seed, func: string, resultSelector?: string): Enumerable<any>;
        Select<K>(selector: ($: T, i: number) => K): Enumerable<K>;
        Select(selector: string): Enumerable<any>;
        SelectMany(collectionSelector: ($, i: number) => any[], resultSelector?: ($, item) => any): Enumerable<any>;
        SelectMany(collectionSelector: ($, i: number) => Enumerable<any>, resultSelector?: ($, item) => any): Enumerable<any>;
        SelectMany(collectionSelector: string, resultSelector?: string): Enumerable<any>;
        Where(predicate: ($: T, i: number) => boolean): Enumerable<T>;
        Where(predicate: string): Enumerable<T>;
        OfType(type: Function): Enumerable<any>;
        Zip(second: any[], selector: (v1, v2, i: number) => any): Enumerable<any>;
        Zip(second: any[], selector: string): Enumerable<any>;
        Zip(second: Enumerable<any>, selector: (v1, v2, i: number) => any): Enumerable<any>;
        Zip(second: Enumerable<any>, selector: string): Enumerable<any>;
        //Join Methods
        Join(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        Join(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        Join(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        Join(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        GroupJoin(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        GroupJoin(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        GroupJoin(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        GroupJoin(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        //Set Methods
        All(predicate: ($: T) => boolean): boolean;
        All(predicate: string): boolean;
        Any(predicate?: ($: T) => boolean): boolean;
        Any(predicate?: string): boolean;
        Concat(second: any[]): Enumerable<any>;
        Concat(second: Enumerable<any>): Enumerable<any>;
        Insert(index: number, second: any[]): Enumerable<any>;
        Insert(index: number, second: Enumerable<any>): Enumerable<any>;
        Alternate(value): Enumerable<any>;
        Contains(value, compareSelector?: ($) => any): boolean;
        Contains(value, compareSelector?: string): boolean;
        DefaultIfEmpty(defaultValue): Enumerable<any>;
        Distinct(compareSelector?: ($: T) => any): Enumerable<T>;
        Distinct(compareSelector?: string): Enumerable<any>;
        Except(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Except(second: any[], compareSelector?: string): Enumerable<any>;
        Except(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Except(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        Intersect(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Intersect(second: any[], compareSelector?: string): Enumerable<any>;
        Intersect(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Intersect(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        SequenceEqual(second: any[], compareSelector?: ($) => any): boolean;
        SequenceEqual(second: any[], compareSelector?: string): boolean;
        SequenceEqual(second: Enumerable<any>, compareSelector?: ($) => any): boolean;
        SequenceEqual(second: Enumerable<any>, compareSelector?: string): boolean;
        Union(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Union(second: any[], compareSelector?: string): Enumerable<any>;
        Union(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Union(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        //Ordering Methods
        OrderBy(keySelector?: ($: T) => any): OrderedEnumerable<T>;
        OrderBy(keySelector?: string): OrderedEnumerable<any>;
        OrderByDescending(keySelector?: ($: T) => any): OrderedEnumerable<T>;
        OrderByDescending(keySelector?: string): OrderedEnumerable<any>;
        Reverse(): Enumerable<any>;
        Shuffle(): Enumerable<any>;
        //Grouping Methods
        GroupBy(keySelector: ($: T) => any, elementSelector?: ($: T) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        GroupBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        PartitionBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        PartitionBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        BufferWithCount(count: number): Enumerable<any>;
        // Aggregate Methods
        Aggregate(func: (a, b) => any);
        Aggregate(seed, func: (a, b) => any, resultSelector?: ($) => any);
        Aggregate(func: string);
        Aggregate(seed, func: string, resultSelector?: string);
        Average(selector?: ($) => number): number;
        Average(selector?: string): number;
        Count(predicate?: ($: T) => boolean): number;
        Count(predicate?: string): number;
        Max(selector?: ($) => number): number;
        Max(selector?: string): number;
        Min(selector?: ($) => number): number;
        Min(selector?: string): number;
        MaxBy(selector: ($) => number): any;
        MaxBy(selector: string): any;
        MinBy(selector: ($) => number): any;
        MinBy(selector: string): any;
        Sum(selector?: ($) => number): number;
        Sum(selector?: string): number;
        //Paging Methods
        ElementAt(index: number): any;
        ElementAtOrDefault(index: number, defaultValue): any;
        First(predicate?: ($: T) => boolean): T;
        First(predicate?: string): any;
        FirstOrDefault(defaultValue, predicate?: ($) => boolean): any;
        FirstOrDefault(defaultValue, predicate?: string): any;
        Last(predicate?: ($: T) => boolean): T;
        Last(predicate?: string): any;
        LastOrDefault(defaultValue, predicate?: ($) => boolean): any;
        LastOrDefault(defaultValue, predicate?: string): any;
        Single(predicate?: ($: T) => boolean): T;
        Single(predicate?: string): any;
        SingleOrDefault(defaultValue, predicate?: ($: T) => boolean): T;
        SingleOrDefault(defaultValue, predicate?: string): any;
        Skip(count: number): Enumerable<T>;
        SkipWhile(predicate: ($, i: number) => boolean): Enumerable<any>;
        SkipWhile(predicate: string): Enumerable<any>;
        Take(count: number): Enumerable<T>;
        TakeWhile(predicate: ($, i: number) => boolean): Enumerable<any>;
        TakeWhile(predicate: string): Enumerable<any>;
        TakeExceptLast(count?: number): Enumerable<any>;
        TakeFromLast(count: number): Enumerable<any>;
        IndexOf(item): number;
        LastIndexOf(item): number;
        // Convert Methods
        ToArray(): T[];
        ToLookup(keySelector: ($) => any, elementSelector?: ($) => any, compareSelector?: (key) => any): Lookup;
        ToLookup(keySelector: string, elementSelector?: string, compareSelector?: string): Lookup;
        ToObject(keySelector: ($) => string, elementSelector: ($) => any): any;
        ToObject(keySelector: string, elementSelector: string): any;
        ToDictionary(keySelector: ($) => any, elementSelector: ($) => any, compareSelector?: (key) => any): Dictionary;
        ToDictionary(keySelector: string, elementSelector: string, compareSelector?: string): Dictionary;
        ToJSON(replacer?: (key, value) => any, space?: number): string;
        ToJSON(replacer?: string, space?: number): string;
        ToString(separator?: string, selector?: ($) =>any): string;
        ToString(separator?: string, selector?: string): string;
        //Action Methods
        Do(action: ($, i: number) => void ): Enumerable<any>;
        Do(action: string): Enumerable<any>;
        ForEach(action: ($, i: number) => void ): void;
        ForEach(func: ($, i: number) => boolean): void;
        ForEach(action_func: string): void;
        Write(separator?: string, selector?: ($) =>any): void;
        Write(separator?: string, selector?: string): void;
        WriteLine(selector?: ($) =>any): void;
        Force(): void;
        //Functional Methods
        Let(func: (e: Enumerable<any>) => Enumerable<any>): Enumerable<any>;
        Share(): Enumerable<any>;
        MemoizeAll(): Enumerable<any>;
        //Error Handling Methods
        Catch(handler: (error: Error) => void ): Enumerable<any>;
        Catch(handler: string): Enumerable<any>;
        Finally(finallyAction: () => void ): Enumerable<any>;
        Finally(finallyAction: string): Enumerable<any>;
        //For Debug Methods
        Trace(message?: string, selector?: ($) =>any): Enumerable<any>;
        Trace(message?: string, selector?: string): Enumerable<any>;
    }

    interface OrderedEnumerable<T> extends Enumerable<T> {
        ThenBy(keySelector: ($: T) => any): OrderedEnumerable<T>;
        ThenBy(keySelector: string): OrderedEnumerable<any>;
        ThenByDescending(keySelector: ($: T) => any): OrderedEnumerable<T>;
        ThenByDescending(keySelector: string): OrderedEnumerable<any>;
    }

    interface Grouping extends Enumerable<any> {
        Key();
    }

    interface Lookup {
        Count(): number;
        Get(key): Enumerable<any>;
        Contains(key): boolean;
        ToEnumerable(): Enumerable<any>;
    }

    interface Dictionary {
        Add(key, value): void;
        Get(key): any;
        Set(key, value): boolean;
        Contains(key): boolean;
        Clear(): void;
        Remove(key): void;
        Count(): number;
        ToEnumerable(): Enumerable<any>;
    }
}

declare var Enumerable: linq.EnumerableStatic;