# React Router v6 Nested Route Re-rendering Issue

This repository demonstrates a common issue encountered when using nested routes in React Router v6.  The problem arises when the parent route doesn't re-render when parameters in a nested route change, resulting in stale data display.

## Problem Description

The `Contact` component correctly renders initially. However, navigating to `/contact/:id` routes updates the `ContactDetails` component but fails to re-render the parent `Contact` component when the ':id' parameter changes, leading to stale prop data in the `Contact` component.

## Solution

The solution involves using the `useParams` hook to access the `id` parameter in the `Contact` component and leveraging this for re-rendering based on parameter changes.  This ensures that the `Contact` component receives updated data whenever a new `:id` is specified in the URL. The use of `useLocation` is demonstrated as an alternative approach.