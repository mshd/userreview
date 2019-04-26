import '../../stencil.core';
export declare class MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The middle name
     */
    middle: string;
    /**
     * The last name
     */
    last: string;
    columns: string;
    userReviews: Array<any>;
    componentWillLoad(): void;
    items(): ({
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "publisher": {
            "@type": string;
            "name": string;
        };
        "image": string;
        "datePublished"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "datePublished": string;
        "publisher": {
            "@type": string;
            "name": string;
        };
        "image"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "datePublished": string;
        "image": string;
        "publisher": {
            "@type": string;
            "name": string;
        };
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "datePublished": string;
        "publisher"?: undefined;
        "image"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "publisher"?: undefined;
        "image"?: undefined;
        "datePublished"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name"?: undefined;
        "reviewBody"?: undefined;
        "publisher"?: undefined;
        "image"?: undefined;
        "datePublished"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "image": string;
        "name": string;
        "reviewBody": string;
        "publisher"?: undefined;
        "datePublished"?: undefined;
    })[];
    stars(score: any, start: any, end: any): JSX.Element;
    render(): JSX.Element;
}
