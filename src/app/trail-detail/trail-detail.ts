import { Component, computed, inject, input } from '@angular/core';
import { TrailService } from '../services/trail.service';
import { HikeLogService } from '../services/hike-log.service';
import { RouterLink } from '@angular/router';
import { TrailCard } from '../trail-card/trail-card';
@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.html',
  imports: [TrailCard, RouterLink],
  styleUrl: './trail-detail.scss',
})
export class TrailDetail {
  private readonly trailService = inject(TrailService);
  protected readonly hikeLog = inject(HikeLogService);

  // ROUTE PARAMETER:
  // Matches the :id in the route 'trails/:id'.
  // Angular passes URL parameters as strings.
  readonly id = input.required<string>();

  // COMPUTED:
  // Find the trail whose ID matches the URL.
  // Number() converts the URL string to a number.
  protected readonly trail = computed(() =>
    this.trailService.trails().find((t) => t.id === Number(this.id())),
  );

  // Re-runs when the selection changes or when a new hike is logged,
  // because logsFor() reads the logs signal.
  protected readonly logs = computed(() => {
    const trail = this.trail();
    return trail ? this.hikeLog.logsFor(trail.id) : [];
  });
}
