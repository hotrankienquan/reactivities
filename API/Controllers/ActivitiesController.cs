using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Activities;
namespace API.Controllers
{
    // public class ActivitiesController : BaseApiController
    // {
  

    //       [HttpGet] //api/activities
    //       public async Task<ActionResult<List<Activity>>> GetActivities()
    //       {
    //     return await Mediator.Send(new List.Query());
    //     }

    //   [HttpGet("{id}")] //api/activities/fdfkdffdfd
    //   public async Task<ActionResult<Activity>> GetActivity(Guid id)
    //   {
    //     return await Mediator.Send(new Details.Query{Id = id});

    //   }
    // }
     public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        }
 
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
    
}