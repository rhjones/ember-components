[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Components

Components are used to encapsulate (repetitious) markup and tie it to behavior.
Instead of separating our concerns along technological lines (HTML, CSS, JS),
components tie all three of these technologies together under a reified visual
element in the user interface.

## Prerequisites

-   [ga-wdi-boston/ember-object](https://github.com/ga-wdi-boston/ember-object)
-   [ga-wdi-boston/ember-routing-dynamic](https://github.com/ga-wdi-boston/ember-routing-dynamic)

## Objectives

By the end of this, developers should be able to:

-   Model the user interface using components
-   Represent visual hierarchies with nested components
-   Register actions and click handlers on component objects
-   Pass data from routes to components, and from components to components

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install` and `bower install`.

## Components Represent a Visual Element

> ![component hierarchy](https://cloud.githubusercontent.com/assets/388761/12339386/dc1cc062-bae2-11e5-85be-ae33da715b2c.png)
>
> From [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)

## Follow-Along: Wireframe the Listr Interface

Let's wireframe the [Listr
client](https://github.com/ga-wdi-boston/listr-client) application interface
with a focus on identifying different logical interface elements. We'll call
these visual elements "components".

![listr demo](https://cloud.githubusercontent.com/assets/388761/12339395/e809372a-bae2-11e5-8073-89bcee5a7351.png)

## Code-Along: Create Listr Index Route

We'll need to generate the application index route and template as a landing page.

```js
ember generate route index
```

```js
//index/route.js
import Ember from 'ember';

 export default Ember.Route.extend({

 });
```

NOTE: there is no model hook for the index route because we currently don't need to pull in any data on initial page load.


```html
<!-- lists/template.hbs -->
<div class="container">
  <h2>Welcome to listr!</h2>
  {{#link-to 'lists'}}Check out the lists{{/link-to}}
</div>
```

Next, we'll need to generate the application lists route and create some list data.

```js
ember generate route lists
```

```js
//lists/route.js
import Ember from 'ember';

 export default Ember.Route.extend({
   model () {
     return [
       {
         title: 'Favorites',
         items: [
           { content: 'Mountains' },
           { content: 'Coffee' },
           { content: 'Live music' },
           { content: 'The spooky ghost emoji' },
         ],
       }, {
         title: 'Todos',
         items: [
           { content: 'Practice Ember' },
           { content: 'Move cross-country' },
           { content: 'Get oil change' },
           { content: 'Buy catnip' },
         ],
       },
     ];
   },
 });
```

Now let's figure out how to render this new route.

```html
<!-- lists/template.hbs -->
<div class="container">
  <h2>ListR</h2>

  {{#each model as |list|}}
    <div>
      <h3>Title: {{list.title}}</h3>
      <ul>
        {{#each list.items as |item|}}
          <li>{{item.content}}</li>
        {{/each}}
      </ul>
    </div>
  {{/each}}
</div>
```

## Code-Along: Create a List Component

Since the list is a visual component of our UI, we should actually pluck that
out into an Ember component.

Let's name it `listr-list` to follow best practices. We wouldn't want to clash
with any new HTML elements in future specs!

```js
ember generate component listr-list
```

Now, we can move our previous markup to the `listr-list`'s template.js.

## Lab: Create a List Item Component

Just like the list itself, each list item is an individual visual component of
our UI. Create a list item component and name it `listr-list/item`.

## Code-Along: Toggle Display of a List

Toggle display of list on header click.

Let's explore Ember's [`classNameBindings`](https://guides.emberjs.com/v1.10.0/components/customizing-a-components-element/)
and see if that can help us achieve this toggle.

## Lab: Toggle Strike-Through of a List Item

Create an action of `toggleProperty` that toggles a `classNameBindings` of
`listItemCompleted`. This class should have a CSS style declaration that
strikes through completed list items.

## Additional Resources

-   [Ember Component Guide](http://guides.emberjs.com/v2.5.0/components/defining-a-component/)
-   [Ember Component API Documentation](http://emberjs.com/api/classes/Ember.Component.html)
-   [Ember Actions](https://guides.emberjs.com/v2.5.0/templates/actions/)
-   [Ember Action Handler](http://emberjs.com/api/classes/Ember.ActionHandler.html#method_send)
-   [Parent to Children Component Communication for UI State - Ember Igniter](http://emberigniter.com/parent-to-children-component-communication/)
-   [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)
-   [Ember Best Practices: Actions Down, Data Up... wait what?](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up)
-   [How Ember Data affects data down, actions up](http://www.samselikoff.com/blog/how-ember-data-affects-data-down-actions-up/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
