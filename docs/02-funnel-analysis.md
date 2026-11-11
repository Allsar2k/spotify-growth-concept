# 02 · Funnel analysis

**All numbers in this document are an illustrative model, not Spotify data.** They show how the funnel is built and where to look; a real analysis would replace them with cohort data.

![Graduation funnel: of 100 graduating Student subscribers, 62 reach their first full-price charge, 48 are still paying after month 1, and 41 are paying at day 90. Of the 59 who leave the paid Individual plan, 12 move to Duo or Family, 30 drop to the free tier and 17 leave Spotify](../assets/funnel.svg)

## The graduation funnel (model cohort of 100)

| Stage | What happens | Remaining | Lost at this step |
|---|---|---|---|
| 1 · Eligibility ends | Student can no longer verify; plan is moved to full-price Individual | 100 | — |
| 2 · First full-price charge | The bill roughly doubles | 62 | 38 cancel before or at the first charge |
| 3 · End of month 1 | First month at the new price | 48 | 14 cancel after one bill |
| 4 · Day 90 | Settled on the new plan | 41 | 7 cancel later |

**Model North Star:** 41 still on Individual + 12 who moved to Duo or Family = **53 of 100 on a paid plan at day 90**.

## Where the 59 go

| Destination | Model count | Read |
|---|---|---|
| Moved to Duo or Family | 12 | Still paying. A good outcome, often found by chance. |
| Free, ad-supported tier | 30 | Still listening, not paying. Recoverable later. |
| Left Spotify | 17 | Lost to a competitor or to no service. The costliest outcome. |

## What the shape tells us

1. **The biggest drop is before the first full-price charge (38 of 100).** People decide at the moment of surprise, not after trying the new price. → Act *before* eligibility ends, not after.
2. **Most leavers stay on Spotify for free (30 of 59).** The product isn't the problem; the price jump is. → Offer a step between student and full price, and a pause option.
3. **Duo and Family catch people by accident (12).** Graduates who move in with a partner or friends often don't know a shared plan costs less per person. → Show them the option on purpose.
4. **17 leave entirely.** This is where competitor bundles win. → Give graduates a reason to stay that a bundle can't copy: their own listening history.

## How to build the real version

- **Cohort:** Student subscribers whose eligibility ended in a given month, followed for 90 days.
- **Segments to split by:** tenure on Student (1 vs. 4 years), country, listening days per week, whether they already use Blend or shared playlists.
- **Leading indicators:** opened the heads-up message, changed plan before the end date, failed payments at the first full-price charge.
