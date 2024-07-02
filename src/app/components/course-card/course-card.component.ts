import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { Course } from '../../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent implements AfterViewInit {
  @ContentChildren('courseImg')
  courseImg: QueryList<ElementRef>;

  @Input({
    required: true,
  })
  course: Course;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Input({ required: true })
  index: number;

  @Output()
  onClickViewCourse = new EventEmitter<Course>();

  ngAfterViewInit(): void {
    console.log(this.courseImg);
  }

  handleViewCourse() {
    this.onClickViewCourse.emit(this.course);
  }

  getClass() {
    // if (this.course.category == 'BEGINNER') {
    //   return ['is-beginner'];
    // }

    // if (this.course.category == 'BEGINNER') {
    //   return 'is-beginner';
    // }

    return { 'is-beginner': this.course.category == 'BEGINNER' };
  }

  getStyles() {
    return { 'text-decoration': 'underline' };
  }
}
